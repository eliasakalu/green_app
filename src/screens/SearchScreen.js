import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Image } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';
import { searchSongs, getAllSongs } from '../data/musicData';

const CATEGORIES = ['Pop', 'Rock', 'Electronic', 'Hip Hop', 'Jazz', 'Classical'];

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const { setCurrentSong, stopPlayback } = usePlayerStore();

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setResults(searchSongs(text));
      setLoading(false);
    }, 300);
  };

  const playSong = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const clearSearch = () => {
    setSearchQuery('');
    setResults([]);
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => playSong(item)}>
      <Image source={{ uri: item.cover_url }} style={styles.resultImage} />
      <View style={styles.resultInfo}>
        <Text style={[styles.resultTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.resultArtist, { color: theme.subText }]} numberOfLines={1}>{item.artist}</Text>
      </View>
      <Text style={[styles.resultGenre, { color: theme.subText }]}>{item.genre}</Text>
    </TouchableOpacity>
  );

  const allSongs = getAllSongs();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Search</Text>

      <View style={[styles.searchBox, { backgroundColor: theme.input }]}>
        <Search color={theme.subText} size={20} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="What do you want to listen to?"
          placeholderTextColor={theme.subText}
          value={searchQuery}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch}>
            <X color={theme.subText} size={20} />
          </TouchableOpacity>
        )}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
      ) : searchQuery.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderSearchResult}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 140 }}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={[styles.emptyText, { color: theme.subText }]}>No results for "{searchQuery}"</Text>
            </View>
          }
        />
      ) : (
        <View>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Browse Categories</Text>
          <View style={styles.categoriesGrid}>
            {CATEGORIES.map((genre) => (
              <TouchableOpacity
                key={genre}
                style={[styles.categoryCard, { backgroundColor: colors.primary + '33' }]}
                onPress={() => handleSearch(genre)}
              >
                <Text style={[styles.categoryText, { color: theme.text }]}>{genre}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.totalSongs, { color: theme.subText }]}>{allSongs.length} songs available</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  searchBox: { flexDirection: 'row', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  input: { flex: 1, marginLeft: 10, fontWeight: '500', fontSize: 16 },
  loader: { marginTop: 50 },
  resultItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#28282833' },
  resultImage: { width: 50, height: 50, borderRadius: 5, marginRight: 12 },
  resultInfo: { flex: 1 },
  resultTitle: { fontSize: 16, fontWeight: 'bold' },
  resultArtist: { fontSize: 13, marginTop: 2 },
  resultGenre: { fontSize: 12, marginLeft: 10 },
  emptyContainer: { alignItems: 'center', marginTop: 50 },
  emptyText: { fontSize: 16, textAlign: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 15 },
  categoriesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  categoryCard: { width: '48%', padding: 20, borderRadius: 8, marginBottom: 12, alignItems: 'center' },
  categoryText: { fontSize: 16, fontWeight: '500' },
  totalSongs: { fontSize: 14, marginTop: 20, textAlign: 'center' },
});