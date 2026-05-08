import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Play, Pause, SkipForward, X } from 'lucide-react-native';
import { usePlayerStore } from '../store/usePlayerStore';
import { useThemeStore } from '../store/useThemeStore';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function MiniPlayer() {
  const { 
    currentSong, 
    isPlaying, 
    togglePlay, 
    playNext, 
    currentTime, 
    duration,
    audioRef,
    stopPlayback  // Add this
  } = usePlayerStore();
  const { isDark, colors } = useThemeStore();
  const navigation = useNavigation();
  const theme = isDark ? colors.dark : colors.light;
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (currentSong?.id) {
      setIsDismissed(false);
    }
  }, [currentSong?.id]);

  if (!currentSong || isDismissed) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleTogglePlay = async (e) => {
    e.stopPropagation();
    await togglePlay();
  };

  const handleSkipNext = async (e) => {
    e.stopPropagation();
    await playNext();
  };

  const handleDismiss = async (e) => {
    e.stopPropagation();
    await stopPlayback();  // Stop the music
    setIsDismissed(true);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.card }]}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Player')}
    >
      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: `${progress}%`, backgroundColor: colors.primary }]} />
      </View>

      <View style={styles.content}>
        <Image source={{ uri: currentSong.cover_url }} style={styles.cover} />
        <View style={styles.info}>
          <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>{currentSong.title}</Text>
          <Text style={[styles.artist, { color: theme.subText }]} numberOfLines={1}>{currentSong.artist}</Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity onPress={handleTogglePlay} style={styles.controlBtn}>
            {isPlaying
              ? <Pause size={24} color={theme.text} fill={theme.text} />
              : <Play size={24} color={theme.text} fill={theme.text} />}
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleSkipNext} style={styles.controlBtn}>
            <SkipForward size={24} color={theme.text} fill={theme.text} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDismiss} style={styles.closeBtn}>
            <X size={20} color={theme.subText} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80,
    width: width - 20,
    marginHorizontal: 10,
    height: 62,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  progressBg: { height: 2, width: '100%', backgroundColor: 'rgba(255,255,255,0.1)' },
  progressFill: { height: 2 },
  content: { flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 },
  cover: { width: 40, height: 40, borderRadius: 6 },
  info: { flex: 1, marginLeft: 12 },
  title: { fontSize: 14, fontWeight: 'bold' },
  artist: { fontSize: 12 },
  controls: { flexDirection: 'row', alignItems: 'center' },
  controlBtn: { padding: 8 },
  closeBtn: { padding: 8, marginLeft: 2, opacity: 0.7 }
});