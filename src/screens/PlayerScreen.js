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
  ListMusic, Heart, PlusCircle, Zap, MoreVertical,
} from 'lucide-react-native';
import { usePlayerStore } from '../store/usePlayerStore';
import { useThemeStore } from '../store/useThemeStore';
import LyricsContainer from '../components/LyricsContainer';
import PlaylistModal from '../components/PlaylistModal';

const { width } = Dimensions.get('window');

export default function PlayerScreen({ navigation }) {
  const {
    currentSong, playNext, playPrevious, setAudioRef,
    queue, likedSongs, addToLiked, removeFromLiked,
    setCurrentTime, setDuration, setIsPlaying, isPlaying, togglePlay, audioRef
  } = usePlayerStore();

  const { isDark, colors } = useThemeStore();
  const [showMenu, setShowMenu] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      // REMOVED: unloadAsync() - This allows music to keep playing in the background
    };
  }, []);

  useEffect(() => {
    if (currentSong) {
      loadAudio();
    }
  }, [currentSong?.id]);

  const loadAudio = async () => {
    if (!currentSong?.audio_url) return;

    // Check if the song is already loaded and playing globally to prevent restart
    if (audioRef && currentSong.audio_url === currentSong.audio_url) {
      const status = await audioRef.getStatusAsync();
      if (status.isLoaded) return; 
    }

    setIsLoading(true);

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });

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
        Alert.alert('Error', 'Could not load audio.');
      }
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      if (!isSeeking) {
        setCurrentTime(status.positionMillis);
      }
      setDuration(status.durationMillis || 0);
      setIsPlaying(status.isPlaying);
      if (status.didJustFinish) {
        playNext();
      }
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

  const { currentTime, duration } = usePlayerStore();
  const isLiked = likedSongs.some((s) => s.id === currentSong?.id);

  if (!currentSong) return null;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#444', '#121212']} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}><ChevronDown color="#fff" size={28} /></TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerLabel}>NOW PLAYING</Text>
            <Text style={styles.headerSong} numberOfLines={1}>{currentSong.title}</Text>
          </View>
          <TouchableOpacity onPress={() => setShowMenu(true)}><MoreVertical color="#fff" size={24} /></TouchableOpacity>
        </View>

        <View style={styles.artworkContainer}>
          <Image source={{ uri: currentSong.cover_url }} style={styles.artwork} />
        </View>

        <View style={styles.lyricsArea}>
          {currentSong.lyrics?.length > 0 ? (
            <LyricsContainer lyrics={currentSong.lyrics} currentTime={currentTime / 1000} />
          ) : (
            <View style={styles.noLyricsContainer}><Text style={styles.noLyricsText}>♪ No lyrics available</Text></View>
          )}
        </View>

        <View style={styles.footer}>
          <View style={styles.songInfo}>
            <Text style={styles.trackName} numberOfLines={1}>{currentSong.title}</Text>
            <Text style={styles.artistName} numberOfLines={1}>{currentSong.artist}</Text>
          </View>

          <View style={styles.progressContainer}>
            <Slider
              style={styles.slider}
              value={duration > 0 ? currentTime / duration : 0}
              onSlidingComplete={handleSeek}
              minimumTrackTintColor="#1DB954"
              maximumTrackTintColor="#555"
              thumbTintColor="#1DB954"
            />
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
              <Text style={styles.timeText}>{formatTime(duration)}</Text>
            </View>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity onPress={playPrevious}><SkipBack color="#fff" size={32} fill="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.playBtn} onPress={() => togglePlay()}>
              {isPlaying ? <Pause color="#000" size={32} fill="#000" /> : <Play color="#000" size={32} fill="#000" />}
            </TouchableOpacity>
            <TouchableOpacity onPress={playNext}><SkipForward color="#fff" size={32} fill="#fff" /></TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <PlaylistModal visible={showPlaylistModal} onClose={() => setShowPlaylistModal(false)} song={currentSong} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 12 },
  headerCenter: { alignItems: 'center', flex: 1 },
  headerLabel: { color: '#B3B3B3', fontSize: 10, fontWeight: 'bold' },
  headerSong: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  artworkContainer: { alignItems: 'center', marginTop: 20 },
  artwork: { width: width * 0.7, height: width * 0.7, borderRadius: 20 },
  lyricsArea: { flex: 1, marginTop: 10 },
  noLyricsContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  noLyricsText: { color: '#B3B3B3', fontSize: 16 },
  footer: { paddingHorizontal: 20, paddingBottom: 40 },
  songInfo: { alignItems: 'center', marginBottom: 10 },
  trackName: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  artistName: { color: '#B3B3B3', fontSize: 15 },
  progressContainer: { width: '100%', marginBottom: 20 },
  slider: { width: '100%', height: 40 },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: -10 },
  timeText: { color: '#b3b3b3', fontSize: 11 },
  controls: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 30 },
  playBtn: { backgroundColor: '#fff', width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
});