import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Image } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';
import { useTranslation } from 'react-i18next';
import { getImageSource } from '../utils/mediaSource';
import { searchSongs, getTotalSongCount } from '../data/database';
import { useEffect } from 'react';

// FIX: these genre values now exactly match the 'genre' field in seedData.js
// Real genres found: ግእዝ (215 songs), አማርኛ (97), ግእዝ/አማርኛ (63), እዝል (46), ግዕዝ (3), አማርኛ/ግእዝ (2)
const GENRES = [
  { label: 'ግእዝ',        query: 'ግእዝ 1' },
  { label: 'ግእዝ 2',       query: 'ግእዝ 2' },
  { label: 'ግእዝ 3',  query: 'ግእዝ 3' },
  { label: 'እዝል/ዓራራይ ቅኝት', query: 'እዝል ዓራራይ ቅኝት' },
  
];

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalSongs, setTotalSongs] = useState(0);
  const [activeGenre, setActiveGenre] = useState(null);
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const { setCurrentSong, stopPlayback } = usePlayerStore();
  const { t } = useTranslation();

  useEffect(() => {
    getTotalSongCount().then(setTotalSongs).catch(() => {});
  }, []);

  const handleSearch = async (text) => {
    setSearchQuery(text);
    setActiveGenre(null);
    if (!text.trim()) { setResults([]); return; }
    setLoading(true);
    try {
      const found = await searchSongs(text);
      setResults(found);
    } catch (e) {
      console.error('Search error:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleGenrePress = async (genre) => {
    setActiveGenre(genre.label);
    setSearchQuery(genre.label);
    setLoading(true);
    try {
      const found = await searchSongs(genre.query);
      setResults(found);
    } catch (e) {
      console.error('Genre search error:', e);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setResults([]);
    setActiveGenre(null);
  };

  const playSong = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={[styles.resultItem, { borderBottomColor: theme.border }]} onPress={() => playSong(item)}>
      <Image source={getImageSource(item.cover_url)} style={styles.resultImage} />
      <View style={styles.resultInfo}>
        <Text style={[styles.resultTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.resultArtist, { color: theme.subText }]} numberOfLines={1}>{item.artist}</Text>
      </View>
      <Text style={[styles.resultGenre, { color: theme.subText }]}>{item.genre}</Text>
    </TouchableOpacity>
  );

  const showResults = searchQuery.length > 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>{t('search')}</Text>

      <View style={[styles.searchBox, { backgroundColor: theme.input }]}>
        <Search color={theme.subText} size={20} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Search hyms..."
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
      ) : showResults ? (
        <>
          <Text style={[styles.resultCount, { color: theme.subText }]}>
            {results.length} results{activeGenre ? ` for "${activeGenre}"` : ''}
          </Text>
          <FlatList
            data={results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearchResult}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 140 }}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: theme.subText }]}>{t('no_result')} "{searchQuery}"</Text>
              </View>
            }
          />
        </>
      ) : (
        <View>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('browse_by_genre')}</Text>
          {/* FIX: 5 genre cards that map to real genre values in the database */}
          <View style={styles.categoriesGrid}>
            {GENRES.map((genre) => (
              <TouchableOpacity
                key={genre.label}
                style={[
                  styles.categoryCard,
                  { backgroundColor: colors.primary + '33' },
                  activeGenre === genre.label && { backgroundColor: colors.primary },
                ]}
                onPress={() => handleGenrePress(genre)}
              >
                <Text style={[
                  styles.categoryText,
                  { color: activeGenre === genre.label ? '#fff' : theme.text },
                ]}>
                  {genre.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.totalSongs, { color: theme.subText }]}>
            {totalSongs} {t('songs')} {t('available')}
          </Text>
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
  resultCount: { fontSize: 13, marginBottom: 10 },
  resultItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1 },
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
  categoryText: { fontSize: 16, fontWeight: '500', textAlign: 'center' },
  totalSongs: { fontSize: 14, marginTop: 20, textAlign: 'center' },
});