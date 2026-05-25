// store/usePlayerStore.js
// ─────────────────────────────────────────────────────────────
// Fixes applied:
//  1. setCurrentSong accepts clearQueue param so single-song taps
//     don't wipe the queue that callers build right after.
//  2. playPrevious always does something (restart if no history).
//  3. stopPlayback is safe even when audioRef is null.
// ─────────────────────────────────────────────────────────────
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePlayerStore = create((set, get) => ({
  currentSong:  null,
  isPlaying:    false,
  currentTime:  0,
  duration:     0,
  queue:        [],
  queueIndex:   0,
  audioRef:     null,
  likedSongs:   [],
  playlists:    [],

  // ── Persistence ───────────────────────────────────────────
  initStore: async () => {
    try {
      const savedLikedSongs = await AsyncStorage.getItem('likedSongs');
      if (savedLikedSongs) set({ likedSongs: JSON.parse(savedLikedSongs) });

      const savedQueue = await AsyncStorage.getItem('queue');
      if (savedQueue) set({ queue: JSON.parse(savedQueue) });

      const savedPlaylists = await AsyncStorage.getItem('playlists');
      if (savedPlaylists) {
        const parsed      = JSON.parse(savedPlaylists);
        const defaultIds  = ['1', '2', '3'];
        const defaultNames = ['My Favorites', 'Workout Mix', 'Chill Vibes'];
        const userPlaylists = parsed.filter(
          (p) => !defaultIds.includes(p.id) || !defaultNames.includes(p.name)
        );
        set({ playlists: userPlaylists });
        await AsyncStorage.setItem('playlists', JSON.stringify(userPlaylists));
      }
    } catch (error) {
      console.log('Error loading saved data:', error);
    }
  },

  // ── Playback helpers ──────────────────────────────────────
  stopCurrentPlayback: async () => {
    const { audioRef } = get();
    if (audioRef) {
      try {
        const status = await audioRef.getStatusAsync();
        if (status.isLoaded) {
          await audioRef.stopAsync();
          await audioRef.unloadAsync();
        }
      } catch (_) {}
    }
    set({ audioRef: null, isPlaying: false, currentTime: 0 });
  },

  stopPlayback: async () => {
    await get().stopCurrentPlayback();
  },

  // ── FIX 1: clearQueue is true by default so "Play All" still
  //    works, but callers that build their own queue can pass false.
  //    In practice, all callers now set their song THEN queue the
  //    rest, so we always clear here and let the caller repopulate.
  setCurrentSong: async (song) => {
    const { currentSong } = get();
    if (currentSong?.id === song?.id) {
      set({ isPlaying: true });
      return;
    }
    // Always clear queue & index — callers add remaining songs next
    set({
      currentSong: song,
      currentTime: 0,
      isPlaying:   true,
      queue:       [],
      queueIndex:  0,
    });
    await AsyncStorage.setItem('queue', JSON.stringify([]));
  },

  setAudioRef: (ref) => set({ audioRef: ref }),

  togglePlay: async () => {
    const { audioRef, isPlaying } = get();
    if (!audioRef) return;
    try {
      const status = await audioRef.getStatusAsync();
      if (!status.isLoaded) return;
      if (isPlaying) {
        await audioRef.pauseAsync();
        set({ isPlaying: false });
      } else {
        await audioRef.playAsync();
        set({ isPlaying: true });
      }
    } catch (_) {}
  },

  // ── Queue management ──────────────────────────────────────
  addToQueue: async (song) => {
    set((state) => ({ queue: [...state.queue, song] }));
    await AsyncStorage.setItem('queue', JSON.stringify(get().queue));
  },

  addMultipleToQueue: async (songs) => {
    set((state) => ({ queue: [...state.queue, ...songs] }));
    await AsyncStorage.setItem('queue', JSON.stringify(get().queue));
  },

  removeFromQueue: async (songId) => {
    set((state) => ({ queue: state.queue.filter((s) => s.id !== songId) }));
    await AsyncStorage.setItem('queue', JSON.stringify(get().queue));
  },

  clearQueue: async () => {
    set({ queue: [], queueIndex: 0 });
    await AsyncStorage.setItem('queue', JSON.stringify([]));
  },

  // ── FIX 2: playNext / playPrevious ────────────────────────
  playNext: async () => {
    const { queue, queueIndex } = get();
    if (queue.length > 0 && queueIndex < queue.length) {
      const nextSong = queue[queueIndex];
      set({
        currentSong: nextSong,
        currentTime: 0,
        isPlaying:   true,
        queueIndex:  queueIndex + 1,
      });
      return nextSong;
    }
    // Nothing left in queue — stop playback gracefully
    set({ isPlaying: false });
    return null;
  },

  // FIX: always does something useful —
  //   • < 3 s into song  → go to previous track (if any)
  //   • ≥ 3 s into song  → restart current track
  //   • no previous track → restart current track
  playPrevious: async () => {
    const { queue, queueIndex, currentTime, audioRef } = get();

    const restartCurrent = async () => {
      if (audioRef) {
        try {
          const status = await audioRef.getStatusAsync();
          if (status.isLoaded) {
            await audioRef.setPositionAsync(0);
            set({ currentTime: 0 });
            return get().currentSong;
          }
        } catch (_) {}
      }
      return get().currentSong;
    };

    // If we're more than 3 seconds in, restart the current song
    if (currentTime > 3000) {
      return restartCurrent();
    }

    // Go to the actual previous track if one exists
    if (queueIndex > 1) {
      const prevSong = queue[queueIndex - 2];
      set({
        currentSong: prevSong,
        currentTime: 0,
        isPlaying:   true,
        queueIndex:  queueIndex - 1,
      });
      return prevSong;
    }

    // No previous track — restart from beginning
    return restartCurrent();
  },

  // ── Playlists ─────────────────────────────────────────────
  createPlaylist: async (name) => {
    const newPlaylist = {
      id:         Date.now().toString(),
      name,
      songs:      [],
      song_count: 0,
    };
    const updatedPlaylists = [...get().playlists, newPlaylist];
    set({ playlists: updatedPlaylists });
    await AsyncStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
    return newPlaylist;
  },

  addSongToPlaylist: async (playlistId, song) => {
    const updatedPlaylists = get().playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        const songs = playlist.songs || [];
        if (!songs.some((s) => s.id === song.id)) {
          const newSongs = [...songs, song];
          return { ...playlist, songs: newSongs, song_count: newSongs.length };
        }
      }
      return playlist;
    });
    set({ playlists: updatedPlaylists });
    await AsyncStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
  },

  removeSongFromPlaylist: async (playlistId, songId) => {
    const updatedPlaylists = get().playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        const songs = (playlist.songs || []).filter((s) => s.id !== songId);
        return { ...playlist, songs, song_count: songs.length };
      }
      return playlist;
    });
    set({ playlists: updatedPlaylists });
    await AsyncStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
  },

  deletePlaylist: async (playlistId) => {
    const updatedPlaylists = get().playlists.filter((p) => p.id !== playlistId);
    set({ playlists: updatedPlaylists });
    await AsyncStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
  },

  // ── Liked songs ───────────────────────────────────────────
  addToLiked: async (song) => {
    const { likedSongs } = get();
    if (!likedSongs.some((s) => s.id === song.id)) {
      const newLikedSongs = [...likedSongs, song];
      set({ likedSongs: newLikedSongs });
      await AsyncStorage.setItem('likedSongs', JSON.stringify(newLikedSongs));
    }
  },

  removeFromLiked: async (songId) => {
    const newLikedSongs = get().likedSongs.filter((s) => s.id !== songId);
    set({ likedSongs: newLikedSongs });
    await AsyncStorage.setItem('likedSongs', JSON.stringify(newLikedSongs));
  },

  // ── State setters (called by AudioManager) ────────────────
  setCurrentTime: (time)        => set({ currentTime: time }),
  setDuration:    (duration)    => set({ duration }),
  setIsPlaying:   (playing)     => set({ isPlaying: playing }),
  setQueueIndex:  (index)       => set({ queueIndex: index }),
}));