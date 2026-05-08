import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Heart, Play, Trash2 } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';

export default function LikedSongsScreen({ navigation }) {
  const { isDark, colors } = useThemeStore();
  const { likedSongs, setCurrentSong, stopPlayback, removeFromLiked, addMultipleToQueue } = usePlayerStore();
  const theme = isDark ? colors.dark : colors.light;

  const playSong = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const playAll = async () => {
    if (likedSongs.length === 0) return;
    await stopPlayback();
    await setCurrentSong(likedSongs[0]);
    if (likedSongs.length > 1) {
      await addMultipleToQueue(likedSongs.slice(1));
    }
    navigation.navigate('Player');
  };

  const handleRemoveFromLiked = (song) => {
    Alert.alert('Remove from Liked', `Remove "${song.title}" from liked songs?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => removeFromLiked(song.id) },
    ]);
  };

  const renderSong = ({ item }) => (
    <TouchableOpacity style={[styles.songItem, { borderBottomColor: theme.border }]} onPress={() => playSong(item)}>
      <Image source={{ uri: item.cover_url }} style={styles.songCover} />
      <View style={styles.songInfo}>
        <Text style={[styles.songTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.songArtist, { color: theme.subText }]}>{item.artist}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveFromLiked(item)} style={styles.removeButton}>
        <Trash2 color="#E91429" size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LinearGradient colors={['#E91429', theme.background]} style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={[styles.iconCircle, { backgroundColor: '#fff' }]}>
            <Heart color="#E91429" size={40} fill="#E91429" />
          </View>
          <Text style={styles.headerTitle}>Liked Songs</Text>
          <Text style={styles.headerCount}>{likedSongs.length} songs</Text>
        </View>
      </LinearGradient>

      {likedSongs.length > 0 ? (
        <>
          <TouchableOpacity style={[styles.playAllButton, { backgroundColor: colors.primary }]} onPress={playAll}>
            <Play color="#fff" size={20} fill="#fff" />
            <Text style={styles.playAllText}>Play All</Text>
          </TouchableOpacity>
          
          <FlatList
            data={likedSongs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSong}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Heart color={theme.subText} size={80} />
          <Text style={[styles.emptyTitle, { color: theme.text }]}>No liked songs yet</Text>
          <Text style={[styles.emptyText, { color: theme.subText }]}>Tap the heart icon on any song to add it to your liked songs</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 60, paddingBottom: 40, alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  backButton: { position: 'absolute', top: 60, left: 20, zIndex: 1 },
  headerContent: { alignItems: 'center' },
  iconCircle: { width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  headerCount: { fontSize: 14, color: '#fff', opacity: 0.9, marginTop: 5 },
  playAllButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20, padding: 15, borderRadius: 25, gap: 10 },
  playAllText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  listContent: { paddingHorizontal: 20, paddingBottom: 140 },
  songItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1 },
  songCover: { width: 50, height: 50, borderRadius: 8, marginRight: 12 },
  songInfo: { flex: 1 },
  songTitle: { fontSize: 16, fontWeight: '500' },
  songArtist: { fontSize: 12, marginTop: 2 },
  removeButton: { padding: 8 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  emptyTitle: { fontSize: 22, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  emptyText: { fontSize: 14, textAlign: 'center', lineHeight: 20 },
});