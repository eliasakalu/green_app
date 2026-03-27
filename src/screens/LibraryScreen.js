import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Heart, Play } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';
import { musicData } from '../data/musicData';

export default function LibraryScreen({ navigation }) {
  const { isDark, colors } = useThemeStore();
  const { likedSongs, setCurrentSong, stopPlayback } = usePlayerStore();
  const theme = isDark ? colors.dark : colors.light;

  const playLikedSongs = async () => {
    if (likedSongs.length > 0) {
      await stopPlayback();
      await setCurrentSong(likedSongs[0]);
      navigation.navigate('Player');
    }
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: theme.card }]}
      onPress={() => navigation.navigate('Category', { category: item })}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <View style={styles.categoryInfo}>
        <Text style={[styles.categoryName, { color: theme.text }]}>{item.name}</Text>
        <Text style={[styles.categoryCount, { color: theme.subText }]}>{item.subcategories.length} collections</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Your Library</Text>
      </View>

      <TouchableOpacity
        style={[styles.likedSection, { backgroundColor: theme.card }]}
        onPress={playLikedSongs}
      >
        <View style={[styles.likedIcon, { backgroundColor: colors.primary }]}>
          <Heart color="#fff" size={28} fill="#fff" />
        </View>
        <View style={styles.likedInfo}>
          <Text style={[styles.likedTitle, { color: theme.text }]}>Liked Songs</Text>
          <Text style={[styles.likedCount, { color: theme.subText }]}>{likedSongs.length} songs</Text>
        </View>
        {likedSongs.length > 0 && <Play color={theme.subText} size={20} />}
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>All Categories</Text>
      <FlatList
        data={musicData.categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold' },
  likedSection: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 25, padding: 15, borderRadius: 15 },
  likedIcon: { width: 60, height: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  likedInfo: { flex: 1 },
  likedTitle: { fontSize: 18, fontWeight: 'bold' },
  likedCount: { fontSize: 13, marginTop: 4 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, marginBottom: 15 },
  listContent: { paddingHorizontal: 20, paddingBottom: 140 },
  categoryCard: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 12, marginBottom: 12 },
  categoryIcon: { fontSize: 32, marginRight: 15 },
  categoryInfo: { flex: 1 },
  categoryName: { fontSize: 16, fontWeight: 'bold' },
  categoryCount: { fontSize: 12, marginTop: 4 },
});