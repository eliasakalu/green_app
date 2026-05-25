// components/AudioManager.js
// ─────────────────────────────────────────────────────────────
// Persistent audio engine — lives at the App root so it never
// unmounts. Owns the single Audio.Sound object for the whole app.
// PlayerScreen, MiniPlayer, etc. just read/write the store;
// this component handles the actual playback.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { usePlayerStore } from '../store/usePlayerStore';
import { getAudioSource } from '../utils/mediaSource';

export default function AudioManager() {
  const soundRef        = useRef(null);
  const activeSongIdRef = useRef(null);
  const isLoadingRef    = useRef(false);

  const {
    currentSong,
    setAudioRef,
    setCurrentTime,
    setDuration,
    setIsPlaying,
  } = usePlayerStore();

  // ── Re-load whenever the current song changes ──────────────
  useEffect(() => {
    if (!currentSong?.id) return;
    if (currentSong.id === activeSongIdRef.current) return; // already loaded
    loadAudio(currentSong);
  }, [currentSong?.id]);

  // ── Core load function ─────────────────────────────────────
  const loadAudio = async (song) => {
    if (isLoadingRef.current) return;   // guard against double-fire
    isLoadingRef.current = true;

    // 1. Tear down previous sound
    const prev = soundRef.current;
    soundRef.current = null;
    setAudioRef(null);
    activeSongIdRef.current = null;

    if (prev) {
      try {
        const status = await prev.getStatusAsync();
        if (status.isLoaded) {
          await prev.stopAsync();
          await prev.unloadAsync();
        }
      } catch (_) {}
    }

    // 2. Configure audio session
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS:        false,
        staysActiveInBackground:   true,   // keeps playing when screen is locked
        playsInSilentModeIOS:      true,
        shouldDuckAndroid:         true,
        playThroughEarpieceAndroid: false,
      });
    } catch (_) {}

    // 3. Load new sound
    try {
      const source = getAudioSource(song.audio_url);
      const { sound: newSound } = await Audio.Sound.createAsync(
        source,
        { shouldPlay: true },
        (status) => onStatusUpdate(status, song.id)
      );

      // Check if user already moved to a different song while we were loading
      const currentInStore = usePlayerStore.getState().currentSong;
      if (currentInStore?.id !== song.id) {
        try { await newSound.unloadAsync(); } catch (_) {}
        isLoadingRef.current = false;
        return;
      }

      soundRef.current        = newSound;
      activeSongIdRef.current = song.id;
      setAudioRef(newSound);
      setIsPlaying(true);

    } catch (err) {
      console.error('AudioManager: load error', err);
      setIsPlaying(false);
    }

    isLoadingRef.current = false;
  };

  // ── Status callback ────────────────────────────────────────
  const onStatusUpdate = (status, songId) => {
    // Discard callbacks from stale sound objects
    if (activeSongIdRef.current !== songId) return;

    if (status.isLoaded) {
      setCurrentTime(status.positionMillis ?? 0);
      setDuration(status.durationMillis  ?? 0);
      setIsPlaying(status.isPlaying);

      // Auto-advance to next song when current finishes
      if (status.didJustFinish) {
        setTimeout(() => {
          // Only advance if this song is still the active one
          if (activeSongIdRef.current === songId) {
            usePlayerStore.getState().playNext();
          }
        }, 300);
      }
    }
  };

  // Renders nothing — pure side-effect component
  return null;
}