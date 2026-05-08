import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Play } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';
import { getSongsBySubcategory } from '../data/database';

export default function SongListScreen({ navigation, route }) {
  const { subcategoryId, subcategoryName, categoryColor } = route.params;
  const { setCurrentSong, stopPlayback, addMultipleToQueue } = usePlayerStore();
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await getSongsBySubcategory(subcategoryId);
        setSongs(result);
      } catch (e) {
        console.error('SongListScreen load error:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [subcategoryId]);

  const playSong = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const playAll = async () => {
    if (songs.length === 0) return;
    await stopPlayback();
    await setCurrentSong(songs[0]);
    if (songs.length > 1) await addMultipleToQueue(songs.slice(1));
    navigation.navigate('Player');
  };

  const renderSong = ({ item, index }) => (
    <TouchableOpacity 
      style={[styles.songItem, { borderBottomColor: theme.border }]} 
      onPress={() => playSong(item)}
      activeOpacity={0.7}
    >
      <View style={styles.songNumber}>
        <Text style={[styles.numberText, { color: theme.subText }]}>{index + 1}</Text>
      </View>
      <Image source={{ uri: item.cover_url }} style={styles.songCover} />
      <View style={styles.songInfo}>
        <Text style={[styles.songTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.songArtist, { color: theme.subText }]} numberOfLines={1}>{item.artist}</Text>
      </View>
      <Text style={[styles.songDuration, { color: theme.subText }]}>
        {Math.floor(item.duration / 60)}:{String(item.duration % 60).padStart(2, '0')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <LinearGradient 
          colors={[(categoryColor || colors.primary) + 'cc', theme.background]} 
          style={styles.header}
        >
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>{subcategoryName}</Text>
          <Text style={styles.headerCount}>{songs.length} songs</Text>
        </LinearGradient>

        {loading ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : (
          <>
            {songs.length > 0 && (
              <TouchableOpacity style={styles.playAllButton} onPress={playAll} activeOpacity={0.8}>
                <Play color="#fff" size={20} fill="#fff" />
                <Text style={styles.playAllText}>Play All</Text>
              </TouchableOpacity>
            )}
            <FlatList
              data={songs}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderSong}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={true}
              indicatorStyle={isDark ? 'white' : 'black'}
              initialNumToRender={15}
              maxToRenderPerBatch={15}
              windowSize={10}
              removeClippedSubviews={true}
              style={styles.flatList}  // ← ADDED THIS
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={[styles.emptyText, { color: theme.subText }]}>No songs found in this collection</Text>
                </View>
              }
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  flatList: {  // ← ADDED THIS
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    marginBottom: 20,
    padding: 8,
    alignSelf: 'flex-start',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerCount: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  playAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    margin: 20,
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    gap: 10,
  },
  playAllText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 140,
    flexGrow: 1,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  songNumber: {
    width: 35,
    alignItems: 'center',
  },
  numberText: {
    fontSize: 14,
    fontWeight: '500',
  },
  songCover: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  songArtist: {
    fontSize: 12,
    marginTop: 2,
  },
  songDuration: {
    fontSize: 12,
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});