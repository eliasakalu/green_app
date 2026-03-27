import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Play } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';

export default function SongListScreen({ navigation, route }) {
  const { subcategory } = route.params;
  const { setCurrentSong, stopPlayback, addMultipleToQueue } = usePlayerStore();
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;

  const playSong = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const playAll = async () => {
    if (subcategory.songs.length === 0) return;
    await stopPlayback();
    await setCurrentSong(subcategory.songs[0]);
    if (subcategory.songs.length > 1) {
      await addMultipleToQueue(subcategory.songs.slice(1));
    }
    navigation.navigate('Player');
  };

  const renderSong = ({ item }) => (
    <TouchableOpacity style={[styles.songItem, { borderBottomColor: theme.border }]} onPress={() => playSong(item)}>
      <Image source={{ uri: item.cover_url }} style={styles.songCover} />
      <View style={styles.songInfo}>
        <Text style={[styles.songTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.songArtist, { color: theme.subText }]}>{item.artist}</Text>
      </View>
      <Text style={[styles.songDuration, { color: theme.subText }]}>
        {Math.floor(item.duration / 60)}:{String(item.duration % 60).padStart(2, '0')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LinearGradient colors={[colors.primary + 'cc', theme.background]} style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{subcategory.name}</Text>
        <Text style={styles.headerCount}>{subcategory.songs.length} songs</Text>
      </LinearGradient>

      {subcategory.songs.length > 0 && (
        <TouchableOpacity style={styles.playAllButton} onPress={playAll}>
          <Play color="#fff" size={20} fill="#fff" />
          <Text style={styles.playAllText}>Play All</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={subcategory.songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSong}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 60, paddingBottom: 30, paddingHorizontal: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  backButton: { marginBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  headerCount: { fontSize: 14, color: '#fff', opacity: 0.8, marginTop: 5 },
  playAllButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1DB954', margin: 20, padding: 15, borderRadius: 25, justifyContent: 'center', gap: 10 },
  playAllText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  listContent: { paddingHorizontal: 20, paddingBottom: 140 },
  songItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1 },
  songCover: { width: 50, height: 50, borderRadius: 8, marginRight: 12 },
  songInfo: { flex: 1 },
  songTitle: { fontSize: 16, fontWeight: '500' },
  songArtist: { fontSize: 12, marginTop: 2 },
  songDuration: { fontSize: 12 },
});