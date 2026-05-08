import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView,
  Dimensions, Image, Modal, Alert, ActivityIndicator,
} from 'react-native';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import {
  Play, Pause, ChevronDown, SkipBack, SkipForward,
  ListMusic, Heart, PlusCircle, MoreVertical,
} from 'lucide-react-native';
import { usePlayerStore } from '../store/usePlayerStore';
import { useThemeStore } from '../store/useThemeStore';
import LyricsContainer from '../components/LyricsContainer';
import PlaylistModal from '../components/PlaylistModal';

const { width } = Dimensions.get('window');

export default function PlayerScreen({ navigation }) {
  const {
    currentSong, playNext, playPrevious, setAudioRef,
    likedSongs, addToLiked, removeFromLiked,
    setCurrentTime, setDuration, setIsPlaying, isPlaying, togglePlay, audioRef,
    currentTime, duration
  } = usePlayerStore();

  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;

  const [showMenu, setShowMenu] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(true);

  // ==================== COLORS & THEMING ====================
  // 🔧 COLOR CUSTOMIZATION: Change gradient colors here
  // - gradientTop: Controls the top gradient color (currently uses primary color + opacity)
  // - gradientBottom: Controls the bottom gradient color (uses theme background)
  const gradientTop = isDark ? colors.primary + 'CC' : colors.primary + '99';
  const gradientBottom = theme.background;
  
  // 🔧 To change gradients:
  // 1. Replace colors.primary with any color: '#FF6B6B', '#4A90E2', '#FFB347', etc.
  // 2. Change opacity by modifying 'CC' (80% opacity) or '99' (60% opacity)
  // 3. Or set fixed colors: const gradientTop = '#FF6B6B';
  // ===========================================================

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  useEffect(() => {
    if (currentSong) loadAudio();
  }, [currentSong?.id]);

  const loadAudio = async () => {
    if (!currentSong?.audio_url) return;

    if (audioRef) {
      try {
        const status = await audioRef.getStatusAsync();
        if (status.isLoaded && status.uri === currentSong.audio_url) {
          if (!status.isPlaying) await audioRef.playAsync();
          setIsLoading(false);
          return;
        }
      } catch (_) {}
    }

    setIsLoading(true);

    try {
      // ==================== AUDIO CONFIGURATION ====================
      // 🔧 AUDIO BEHAVIOR: Modify audio playback settings here
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,     // 🔧 Set to true to allow recording
        staysActiveInBackground: true,  // 🔧 Set to false to disable background playback
        playsInSilentModeIOS: true,     // 🔧 Set to false to respect silent switch
        shouldDuckAndroid: true,        // 🔧 Set to false to not lower volume on other audio
        playThroughEarpieceAndroid: false, // 🔧 Set to true to play through earpiece (phone call style)
      });
      // =============================================================

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: currentSong.audio_url },
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );

      setAudioRef(newSound);
      setIsLoading(false);
    } catch (error) {
      if (isMounted.current) {
        setIsLoading(false);
        Alert.alert('Error', 'Could not load audio. Check your internet connection.');
      }
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      if (!isSeeking) setCurrentTime(status.positionMillis);
      setDuration(status.durationMillis || 0);
      setIsPlaying(status.isPlaying);
      if (status.didJustFinish) playNext();
    }
  };

  const handleSeek = async (value) => {
    if (!audioRef) return;
    try {
      setIsSeeking(true);
      const { duration } = usePlayerStore.getState();
      const newPosition = value * duration;
      await audioRef.setPositionAsync(newPosition);
      setCurrentTime(newPosition);
    } catch (_) {}
    setIsSeeking(false);
  };

  const formatTime = (millis) => {
    if (!millis || isNaN(millis)) return '0:00';
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  const isLiked = likedSongs.some((s) => s.id === currentSong?.id);

  const handleLike = async () => {
    if (isLiked) await removeFromLiked(currentSong.id);
    else await addToLiked(currentSong);
  };

  if (!currentSong) return null;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Gradient Background - See COLORS & THEMING section above for modifications */}
      <LinearGradient
        colors={[gradientTop, gradientBottom]}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* ==================== HEADER SECTION ==================== */}
        <View style={styles.header}>
          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronDown color={theme.text} size={28} />
          </TouchableOpacity>
          
          <View style={styles.headerCenter}>
            {/* 🔧 TEXT CUSTOMIZATION: Change header label text and style */}
            <Text style={[styles.headerLabel, { color: theme.subText }]}>NOW PLAYING</Text>
            <Text style={[styles.headerSong, { color: theme.text }]} numberOfLines={1}>
              {currentSong.title}
            </Text>
          </View>
          
          {/* Menu button */}
          <TouchableOpacity onPress={() => setShowMenu(true)}>
            <MoreVertical color={theme.text} size={24} />
          </TouchableOpacity>
        </View>

        {/* ==================== ARTWORK SECTION ==================== */}
        <View style={styles.artworkContainer}>
          <Image source={{ uri: currentSong.cover_url }} style={styles.artwork} />
        </View>

        {/* ==================== SONG INFO SECTION ==================== */}
        {/* 🔧 LAYOUT: This section is always visible between artwork and controls */}
        <View style={styles.songInfo}>
          {/* 🔧 TEXT STYLES: Modify track name appearance here */}
          <Text style={[styles.trackName, { color: theme.text }]} numberOfLines={1}>
            {currentSong.title}
          </Text>
          {/* 🔧 TEXT STYLES: Modify artist name appearance here */}
          <Text style={[styles.artistName, { color: theme.subText }]} numberOfLines={1}>
            {currentSong.artist}
          </Text>
        </View>

        {/* ==================== LYRICS SECTION ==================== */}
        {/* 🔧 LAYOUT: Lyrics area with fixed height - modify 'height' in styles */}
        <View style={styles.lyricsArea}>
          {currentSong.lyrics?.length > 0 ? (
            <LyricsContainer
              lyrics={currentSong.lyrics}
              currentTime={currentTime / 1000}
            />
          ) : (
            <View style={styles.noLyricsContainer}>
              <Text style={[styles.noLyricsText, { color: theme.subText }]}>
                ♪ No lyrics available
              </Text>
            </View>
          )}
        </View>

        {/* ==================== FOOTER CONTROLS ==================== */}
        <View style={styles.footer}>
          {/* Progress Slider */}
          <View style={styles.progressContainer}>
            <Slider
              style={styles.slider}
              value={duration > 0 ? currentTime / duration : 0}
              onSlidingComplete={handleSeek}
              // 🔧 SLIDER COLORS: Modify progress slider appearance
              minimumTrackTintColor={colors.primary}  // Color of filled portion
              maximumTrackTintColor={isDark ? '#555' : '#ccc'}  // Color of empty portion
              thumbTintColor={colors.primary}  // Color of slider thumb/knob
            />
            <View style={styles.timeRow}>
              {/* 🔧 TIME FORMAT: Modify formatTime function above to change time display */}
              <Text style={[styles.timeText, { color: theme.subText }]}>{formatTime(currentTime)}</Text>
              <Text style={[styles.timeText, { color: theme.subText }]}>{formatTime(duration)}</Text>
            </View>
          </View>

          {/* Playback Controls */}
          <View style={styles.controls}>
            <TouchableOpacity onPress={playPrevious}>
              <SkipBack color={theme.text} size={32} fill={theme.text} />
            </TouchableOpacity>
            
            {/* Play/Pause Button */}
            {/* 🔧 BUTTON STYLES: Modify play button size and appearance */}
            <TouchableOpacity style={[styles.playBtn, { backgroundColor: theme.text }]} onPress={togglePlay}>
              {isLoading ? (
                <ActivityIndicator size="small" color={theme.background} />
              ) : isPlaying ? (
                <Pause color={theme.background} size={32} fill={theme.background} />
              ) : (
                <Play color={theme.background} size={32} fill={theme.background} />
              )}
            </TouchableOpacity>
            
            <TouchableOpacity onPress={playNext}>
              <SkipForward color={theme.text} size={32} fill={theme.text} />
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            {/* Like button */}
            <TouchableOpacity onPress={handleLike} style={styles.actionBtn}>
              <Heart
                color={isLiked ? colors.primary : theme.text}
                size={24}
                fill={isLiked ? colors.primary : 'none'}
              />
            </TouchableOpacity>
            
            {/* Add to playlist button */}
            <TouchableOpacity onPress={() => setShowPlaylistModal(true)} style={styles.actionBtn}>
              <PlusCircle color={theme.text} size={24} />
            </TouchableOpacity>
            
            {/* Queue button */}
            <TouchableOpacity onPress={() => navigation.navigate('Queue')} style={styles.actionBtn}>
              <ListMusic color={theme.text} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Modals */}
      <PlaylistModal
        visible={showPlaylistModal}
        onClose={() => setShowPlaylistModal(false)}
        song={currentSong}
      />

      {/* Options Menu Modal */}
      <Modal visible={showMenu} transparent animationType="fade">
        <TouchableOpacity style={styles.menuOverlay} onPress={() => setShowMenu(false)}>
          <View style={[styles.menuContent, { backgroundColor: theme.card }]}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setShowMenu(false); navigation.navigate('Queue'); }}
            >
              <ListMusic color={theme.text} size={20} />
              <Text style={[styles.menuText, { color: theme.text }]}>Go to Queue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setShowMenu(false); setShowPlaylistModal(true); }}
            >
              <PlusCircle color={theme.text} size={20} />
              <Text style={[styles.menuText, { color: theme.text }]}>Add to Playlist</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

// ==================== STYLESHEET - MODIFY ALL VISUAL PROPERTIES HERE ====================
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    // 🔧 CONTAINER: Background color is set dynamically in JSX
  },
  safeArea: { 
    flex: 1,
    // 🔧 SAFE AREA: Add padding/margins here for notch compatibility
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    // 🔧 HEADER: Modify padding, margins, or add background here
  },
  headerCenter: { 
    alignItems: 'center', 
    flex: 1,
    // 🔧 HEADER CENTER: Adjust alignment and spacing
  },
  headerLabel: { 
    fontSize: 10, 
    fontWeight: 'bold', 
    letterSpacing: 1,
    // 🔧 HEADER LABEL: Change font size, weight, spacing
  },
  headerSong: { 
    fontSize: 12, 
    fontWeight: 'bold',
    // 🔧 HEADER SONG: Modify song title in header appearance
  },
  artworkContainer: { 
    alignItems: 'center', 
    marginTop: 16,
    // 🔧 ARTWORK: Adjust margin and positioning
  },
  artwork: { 
    width: width * 0.65, 
    height: width * 0.65, 
    borderRadius: 20,
    // 🔧 ARTWORK SIZE: Modify width/height multiplier (0.65 = 65% of screen width)
    // 🔧 ARTWORK SHAPE: Change borderRadius (0 = square, 999 = circle)
  },
  songInfo: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 6,
    // 🔧 SONG INFO: Adjust padding and margins around song title/artist
  },
  trackName: {
    fontSize: 18,        // 🔧 FONT SIZE: Change track title size
    fontWeight: '700',   // 🔧 FONT WEIGHT: 'normal', 'bold', '100'-'900'
    textAlign: 'center',
    letterSpacing: 0.3,  // 🔧 LETTER SPACING: Adjust character spacing
  },
  artistName: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '500',
    // 🔧 ARTIST STYLE: Modify artist name appearance
  },
  lyricsArea: {
    height: 110,         // 🔧 LYRICS HEIGHT: Increase/decrease lyrics container height
    marginTop: 8,
    marginBottom: 4,
    // 🔧 LYRICS AREA: Adjust spacing around lyrics
  },
  noLyricsContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  noLyricsText: { 
    fontSize: 16,
    // 🔧 NO LYRICS TEXT: Modify placeholder text appearance
  },
  footer: { 
    paddingHorizontal: 20, 
    paddingBottom: 36,
    // 🔧 FOOTER: Adjust padding around controls section
  },
  progressContainer: { 
    width: '100%', 
    marginBottom: 20,
    // 🔧 PROGRESS: Adjust spacing around slider
  },
  slider: { 
    width: '100%', 
    height: 40,
    // 🔧 SLIDER: Adjust height and width of slider component
  },
  timeRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: -10,
    // 🔧 TIME ROW: Adjust spacing between time stamps
  },
  timeText: { 
    fontSize: 11,
    // 🔧 TIME TEXT: Modify font size of time display
  },
  controls: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 30,
    // 🔧 CONTROLS: Adjust spacing between playback buttons (gap property)
  },
  playBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    // 🔧 PLAY BUTTON: Modify size (width/height) and shape (borderRadius)
    // - Set width/height to 80 for larger button
    // - Set borderRadius to width/2 for perfect circle
  },
  actionButtons: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    gap: 40, 
    marginTop: 20,
    // 🔧 ACTION BUTTONS: Adjust spacing between action buttons
  },
  actionBtn: { 
    padding: 8,
    // 🔧 ACTION BUTTON: Modify touchable area padding
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    // 🔧 MENU OVERLAY: Change backdrop opacity/color
  },
  menuContent: { 
    borderRadius: 12, 
    padding: 10, 
    minWidth: 200,
    // 🔧 MENU CONTENT: Modify menu appearance
  },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12, 
    gap: 12,
    // 🔧 MENU ITEM: Adjust menu item padding and spacing
  },
  menuText: { 
    fontSize: 16,
    // 🔧 MENU TEXT: Modify menu font size
  },
});