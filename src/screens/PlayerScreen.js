// screens/PlayerScreen.js
// ─────────────────────────────────────────────────────────────
// Fixes applied:
//  • No longer owns the Audio.Sound object — AudioManager does.
//  • Opening the player from MiniPlayer always shows live state.
//  • Seek talks directly to audioRef from the store.
//  • Next / Previous reset activeSongId via the store only.
//  • Loading indicator driven by isLoading flag in store.
// ─────────────────────────────────────────────────────────────
import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView,
  Dimensions, Image, Modal, Alert, ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import {
  Play, Pause, ChevronDown, SkipBack, SkipForward,
  ListMusic, Heart, PlusCircle, MoreVertical,
} from 'lucide-react-native';
import { usePlayerStore } from '../store/usePlayerStore';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../store/useThemeStore';
import LyricsContainer from '../components/LyricsContainer';
import PlaylistModal from '../components/PlaylistModal';
import { getImageSource } from '../utils/mediaSource';

const { width } = Dimensions.get('window');

export default function PlayerScreen({ navigation }) {
  const {
    currentSong,
    playNext,
    playPrevious,
    likedSongs,
    addToLiked,
    removeFromLiked,
    setCurrentTime,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    audioRef,
  } = usePlayerStore();

  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const { t } = useTranslation();

  const [showMenu,          setShowMenu]          = useState(false);
  const [showPlaylistModal, setShowPlaylistModal]  = useState(false);
  const isSeekingRef = useRef(false);

  const gradientTop    = isDark ? colors.primary + 'CC' : colors.primary + '99';
  const gradientBottom = theme.background;

  // ── Seek ──────────────────────────────────────────────────
  const handleSeek = async (value) => {
    const sound = audioRef; // live ref from store — always valid
    if (!sound) return;
    try {
      isSeekingRef.current = true;
      const pos = value * (usePlayerStore.getState().duration);
      await sound.setPositionAsync(pos);
      setCurrentTime(pos);
    } catch (_) {}
    isSeekingRef.current = false;
  };

  // ── Next / Previous ───────────────────────────────────────
  const handleNext     = () => playNext();
  const handlePrevious = () => playPrevious();

  // ── Helpers ───────────────────────────────────────────────
  const formatTime = (millis) => {
    if (!millis || isNaN(millis)) return '0:00';
    const m = Math.floor(millis / 60000);
    const s = Math.floor((millis % 60000) / 1000);
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  const isLiked    = likedSongs.some((s) => s.id === currentSong?.id);
  const handleLike = async () => {
    if (isLiked) await removeFromLiked(currentSong.id);
    else         await addToLiked(currentSong);
  };

  // audioRef is null only while AudioManager is still loading
  const isLoading = !audioRef && !!currentSong;

  if (!currentSong) return null;

  // ── Render ────────────────────────────────────────────────
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LinearGradient colors={[gradientTop, gradientBottom]} style={StyleSheet.absoluteFill} />

      <SafeAreaView style={styles.safeArea}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronDown color={theme.text} size={28} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={[styles.headerLabel, { color: theme.subText }]}>{t('now_playing')}</Text>
            <Text style={[styles.headerSong,  { color: theme.text }]} numberOfLines={1}>
              {currentSong.title}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setShowMenu(true)}>
            <MoreVertical color={theme.text} size={24} />
          </TouchableOpacity>
        </View>

        {/* ── Artwork ── */}
        <View style={styles.artworkContainer}>
          <Image
            source={getImageSource(currentSong.cover_url)}
            style={styles.artwork}
          />
        </View>

        {/* ── Song info ── */}
        <View style={styles.songInfo}>
          <Text style={[styles.trackName,  { color: theme.text }]}    numberOfLines={1}>
            {currentSong.title}
          </Text>
          <Text style={[styles.artistName, { color: theme.subText }]} numberOfLines={1}>
            {currentSong.artist}
          </Text>
        </View>

        {/* ── Lyrics ── */}
        <View style={styles.lyricsArea}>
          {currentSong.lyrics?.length > 0 ? (
            <LyricsContainer
              lyrics={currentSong.lyrics}
              currentTime={currentTime / 1000}
            />
          ) : (
            <View style={styles.noLyricsContainer}>
              <Text style={[styles.noLyricsText, { color: theme.subText }]}>
                No lyrics available
              </Text>
            </View>
          )}
        </View>

        {/* ── Footer ── */}
        <View style={styles.footer}>

          {/* Progress slider */}
          <View style={styles.progressContainer}>
            <Slider
              style={styles.slider}
              value={duration > 0 ? currentTime / duration : 0}
              onSlidingComplete={handleSeek}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={isDark ? '#555' : '#ccc'}
              thumbTintColor={colors.primary}
            />
            <View style={styles.timeRow}>
              <Text style={[styles.timeText, { color: theme.subText }]}>
                {formatTime(currentTime)}
              </Text>
              <Text style={[styles.timeText, { color: theme.subText }]}>
                {formatTime(duration)}
              </Text>
            </View>
          </View>

          {/* Playback controls */}
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={handlePrevious}
              hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
            >
              <SkipBack color={theme.text} size={32} fill={theme.text} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.playBtn, { backgroundColor: theme.text }]}
              onPress={togglePlay}
              disabled={isLoading}
            >
              {isLoading
                ? <ActivityIndicator size="small" color={theme.background} />
                : isPlaying
                  ? <Pause color={theme.background} size={32} fill={theme.background} />
                  : <Play  color={theme.background} size={32} fill={theme.background} />
              }
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
            >
              <SkipForward color={theme.text} size={32} fill={theme.text} />
            </TouchableOpacity>
          </View>

          {/* Action buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={handleLike} style={styles.actionBtn}>
              <Heart
                color={isLiked ? colors.primary : theme.text}
                size={24}
                fill={isLiked ? colors.primary : 'none'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowPlaylistModal(true)} style={styles.actionBtn}>
              <PlusCircle color={theme.text} size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Queue')} style={styles.actionBtn}>
              <ListMusic color={theme.text} size={24} />
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>

      {/* ── Playlist modal ── */}
      <PlaylistModal
        visible={showPlaylistModal}
        onClose={() => setShowPlaylistModal(false)}
        song={currentSong}
      />

      {/* ── Options menu ── */}
      <Modal visible={showMenu} transparent animationType="fade">
        <TouchableOpacity style={styles.menuOverlay} onPress={() => setShowMenu(false)}>
          <View style={[styles.menuContent, { backgroundColor: theme.card }]}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setShowMenu(false); navigation.navigate('Queue'); }}
            >
              <ListMusic color={theme.text} size={20} />
              <Text style={[styles.menuText, { color: theme.text }]}>{t('go_to_queue')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setShowMenu(false); setShowPlaylistModal(true); }}
            >
              <PlusCircle color={theme.text} size={20} />
              <Text style={[styles.menuText, { color: theme.text }]}>{t('add_to_playlist')}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:          { flex: 1 },
  safeArea:           { flex: 1 },
  header:             { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 12 },
  headerCenter:       { alignItems: 'center', flex: 1 },
  headerLabel:        { fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  headerSong:         { fontSize: 12, fontWeight: 'bold' },
  artworkContainer:   { alignItems: 'center', marginTop: 16 },
  artwork:            { width: width * 0.65, height: width * 0.65, borderRadius: 20 },
  songInfo:           { alignItems: 'center', paddingHorizontal: 24, paddingVertical: 10, marginTop: 6 },
  trackName:          { fontSize: 18, fontWeight: '700', textAlign: 'center', letterSpacing: 0.3 },
  artistName:         { fontSize: 14, marginTop: 4, textAlign: 'center', fontWeight: '500' },
  lyricsArea:         { height: 110, marginTop: 8, marginBottom: 4 },
  noLyricsContainer:  { flex: 1, justifyContent: 'center', alignItems: 'center' },
  noLyricsText:       { fontSize: 16 },
  footer:             { paddingHorizontal: 20, paddingBottom: 36 },
  progressContainer:  { width: '100%', marginBottom: 20 },
  slider:             { width: '100%', height: 40 },
  timeRow:            { flexDirection: 'row', justifyContent: 'space-between', marginTop: -10 },
  timeText:           { fontSize: 11 },
  controls:           { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 30 },
  playBtn:            { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  actionButtons:      { flexDirection: 'row', justifyContent: 'center', gap: 40, marginTop: 20 },
  actionBtn:          { padding: 8 },
  menuOverlay:        { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  menuContent:        { borderRadius: 12, padding: 10, minWidth: 200 },
  menuItem:           { flexDirection: 'row', alignItems: 'center', padding: 12, gap: 12 },
  menuText:           { fontSize: 16 },
});