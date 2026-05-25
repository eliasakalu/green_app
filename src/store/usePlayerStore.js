import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePlayerStore = create((set, get) => ({
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  queue: [],
  queueIndex: 0,
  audioRef: null,
  likedSongs: [],
  playlists: [],

  initStore: async () => {
    try {
      const savedLikedSongs = await AsyncStorage.getItem('likedSongs');
      if (savedLikedSongs) set({ likedSongs: JSON.parse(savedLikedSongs) });

      const savedQueue = await AsyncStorage.getItem('queue');
      if (savedQueue) set({ queue: JSON.parse(savedQueue) });

      const savedPlaylists = await AsyncStorage.getItem('playlists');
      if (savedPlaylists) {
        const parsed = JSON.parse(savedPlaylists);
        const defaultIds = ['1', '2', '3'];
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

  // ✅ FIXED: clears queue every time a new song session starts
  setCurrentSong: async (song) => {
    const { currentSong } = get();
    if (currentSong?.id === song?.id) {
      set({ isPlaying: true });
      return;
    }
    await get().stopPlayback();
    // Clear queue and reset index so old songs don't bleed through
    set({ currentSong: song, currentTime: 0, isPlaying: true, queue: [], queueIndex: 0 });
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

  playNext: async () => {
    const { queue, queueIndex } = get();
    if (queue.length > 0 && queueIndex < queue.length) {
      const nextSong = queue[queueIndex];
      await get().stopPlayback();
      set({
        currentSong: nextSong,
        currentTime: 0,
        isPlaying: true,
        queueIndex: queueIndex + 1,
      });
      return nextSong;
    }
    return null;
  },

  playPrevious: async () => {
    const { queue, queueIndex, currentTime, audioRef } = get();
    if (currentTime > 3000 && audioRef) {
      try {
        const status = await audioRef.getStatusAsync();
        if (status.isLoaded) {
          await audioRef.setPositionAsync(0);
          set({ currentTime: 0 });
          return get().currentSong;
        }
      } catch (_) {}
    }
    if (queueIndex > 1) {
      const prevSong = queue[queueIndex - 2];
      await get().stopPlayback();
      set({
        currentSong: prevSong,
        currentTime: 0,
        isPlaying: true,
        queueIndex: queueIndex - 1,
      });
      return prevSong;
    }
    return null;
  },

  createPlaylist: async (name) => {
    const newPlaylist = {
      id: Date.now().toString(),
      name,
      songs: [],
      song_count: 0,
    };
    const currentPlaylists = get().playlists;
    const updatedPlaylists = [...currentPlaylists, newPlaylist];
    set({ playlists: updatedPlaylists });
    await AsyncStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
    return newPlaylist;
  },

  addSongToPlaylist: async (playlistId, song) => {
    const currentPlaylists = get().playlists;
    const updatedPlaylists = currentPlaylists.map((playlist) => {
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
    const currentPlaylists = get().playlists;
    const updatedPlaylists = currentPlaylists.map((playlist) => {
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
    const currentPlaylists = get().playlists;
    const updatedPlaylists = currentPlaylists.filter((p) => p.id !== playlistId);
    set({ playlists: updatedPlaylists });
    await AsyncStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
  },

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

  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setQueueIndex: (index) => set({ queueIndex: index }),
}));