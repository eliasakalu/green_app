import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Alert, Image } from 'react-native';
import { Heart, Play, PlusCircle, ChevronRight } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';
import { getAllCategories, getSubcategoriesByCategory } from '../data/database';
import { useTranslation } from 'react-i18next';
import PlaylistModal from '../components/PlaylistModal';

// Hymnal category icon map — matches by category name (case-insensitive, partial match)
const CATEGORY_ICON_MAP = [
  { keywords: ['praise',  'prais'],           icon: '🙌' },
  { keywords: ['worship', 'worsh'],           icon: '🛐' },
  { keywords: ['prayer', 'pray'],             icon: '🙏' },
  { keywords: ['christmas', 'advent', 'xmas'],icon: '🎄' },
  { keywords: ['easter', 'resurrection'],     icon: '✝️' },
  { keywords: ['holy spirit', 'spirit'],      icon: '🕊️' },
  { keywords: ['communion', 'lord\'s supper', 'eucharist'], icon: '🍷' },
  { keywords: ['baptism', 'baptis'],          icon: '💧' },
  { keywords: ['faith', 'trust'],             icon: '⛪' },
  { keywords: ['grace', 'mercy'],             icon: '🌿' },
  { keywords: ['salvation', 'redeem', 'redemp'], icon: '✨' },
  { keywords: ['mission', 'evangelism', 'gospel'], icon: '📖' },
  { keywords: ['love', 'agape'],              icon: '❤️' },
  { keywords: ['joy', 'rejoic'],              icon: '😊' },
  { keywords: ['peace', 'comfort'],           icon: '☮️' },
  { keywords: ['hope', 'promis'],             icon: '🌅' },
  { keywords: ['creation', 'nature', 'earth'],icon: '🌍' },
  { keywords: ['anthem', 'national'],         icon: '🎵' },
  { keywords: ['morning', 'dawn'],            icon: '🌄' },
  { keywords: ['evening', 'night', 'vesper'], icon: '🌙' },
  { keywords: ['children', 'child', 'youth'], icon: '👶' },
  { keywords: ['funeral', 'death', 'memorial'], icon: '🕯️' },
  { keywords: ['wedding', 'marriage'],        icon: '💍' },
  { keywords: ['harvest', 'thanksgiving'],    icon: '🌾' },
  { keywords: ['doxology', 'glory', 'glorif'],icon: '👑' },
  { keywords: ['hymn', 'song', 'music'],      icon: '🎶' },
  { keywords: ['amharic', 'ethiopi', 'ሀ'],    icon: '🇪🇹' },
  { keywords: ['english'],                    icon: '🇬🇧' },
];

const EARBUD_ICON = require('../icons/earbud.png');

function getCategoryIcon(categoryName) {
  if (!categoryName) return null;
  const lower = categoryName.toLowerCase();
  for (const entry of CATEGORY_ICON_MAP) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.icon;
    }
  }
  return null;
}

export default function LibraryScreen({ navigation }) {
  const { isDark, colors } = useThemeStore();
  const { likedSongs, setCurrentSong, stopPlayback, playlists, deletePlaylist } = usePlayerStore();
  const theme = isDark ? colors.dark : colors.light;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const load = async () => {
      try {
        const cats = await getAllCategories();
        const catsWithSubs = await Promise.all(
          cats.map(async (cat) => {
            const subs = await getSubcategoriesByCategory(cat.id);
            return { ...cat, subcategories: subs };
          })
        );
        setCategories(catsWithSubs);
      } catch (e) {
        console.error('LibraryScreen load error:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const openLikedSongs = () => {
    navigation.navigate('LikedSongs');
  };

  const playPlaylist = async (playlist) => {
    if (playlist.songs && playlist.songs.length > 0) {
      await stopPlayback();
      await setCurrentSong(playlist.songs[0]);
      if (playlist.songs.length > 1) {
        const { addMultipleToQueue } = usePlayerStore.getState();
        await addMultipleToQueue(playlist.songs.slice(1));
      }
      navigation.navigate('Player');
    }
  };

  const handleDeletePlaylist = (playlist) => {
    Alert.alert('Delete Playlist', `Delete "${playlist.name}"?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deletePlaylist(playlist.id) },
    ]);
  };

  const renderCategory = ({ item }) => {
    const emoji = getCategoryIcon(item.name);

    return (
      <TouchableOpacity
        style={[styles.categoryCard, { backgroundColor: theme.card }]}
        onPress={() =>
          navigation.navigate('Category', {
            categoryId: item.id,
            categoryName: item.name,
            categoryColor: item.color,
            categoryIcon: emoji,
          })
        }
      >
        <View style={[styles.categoryIconWrapper, { backgroundColor: (item.color || colors.primary) + '22' }]}>
          {emoji ? (
            <Text style={styles.categoryIcon}>{emoji}</Text>
          ) : (
            <Image
              source={EARBUD_ICON}
              style={[styles.categoryIconImg, { tintColor: item.color || colors.primary }]}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={styles.categoryInfo}>
          <Text style={[styles.categoryName, { color: theme.text }]}>{item.name}</Text>
          <Text style={[styles.categoryCount, { color: theme.subText }]}>
            {item.subcategories.length} {t('collections')}
          </Text>
        </View>
        <ChevronRight color={theme.subText} size={18} />
      </TouchableOpacity>
    );
  };

  const renderPlaylist = ({ item }) => (
    <TouchableOpacity
      style={[styles.playlistCard, { backgroundColor: theme.card }]}
      onPress={() => playPlaylist(item)}
      onLongPress={() => handleDeletePlaylist(item)}
    >
      <View style={[styles.playlistIcon, { backgroundColor: colors.primary + '33' }]}>
        <Image source={EARBUD_ICON} style={{ width: 24, height: 24, tintColor: colors.primary }} />
      </View>
      <View style={styles.playlistInfo}>
        <Text style={[styles.playlistName, { color: theme.text }]}>{item.name}</Text>
        <Text style={[styles.playlistCount, { color: theme.subText }]}>{item.song_count || 0} {t('songs')}</Text>
      </View>
      <Play color={theme.subText} size={20} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Your Library</Text>
      </View>

      <TouchableOpacity style={[styles.likedSection, { backgroundColor: theme.card }]} onPress={openLikedSongs}>
        <View style={[styles.likedIcon, { backgroundColor: colors.primary }]}>
          <Heart color="#fff" size={28} fill="#fff" />
        </View>
        <View style={styles.likedInfo}>
          <Text style={[styles.likedTitle, { color: theme.text }]}>{t('liked_hyms')}</Text>
          <Text style={[styles.likedCount, { color: theme.subText }]}>{likedSongs.length} {t('songs')}</Text>
        </View>
        {likedSongs.length > 0 && <ChevronRight color={theme.subText} size={20} />}
      </TouchableOpacity>

      {/* Playlists Section */}
      <View style={styles.playlistsHeader}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('your_playlist')}</Text>
        <TouchableOpacity onPress={() => setShowPlaylistModal(true)}>
          <PlusCircle color={colors.primary} size={24} />
        </TouchableOpacity>
      </View>

      {playlists && playlists.length > 0 ? (
        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id}
          renderItem={renderPlaylist}
          scrollEnabled={false}
          contentContainerStyle={styles.playlistsList}
        />
      ) : (
        <TouchableOpacity
          style={[styles.emptyPlaylists, { backgroundColor: theme.card }]}
          onPress={() => setShowPlaylistModal(true)}
        >
          <PlusCircle color={theme.subText} size={40} />
          <Text style={[styles.emptyPlaylistsText, { color: theme.subText }]}>{t('create_your_playlist')}</Text>
        </TouchableOpacity>
      )}

      <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('all_categories')}</Text>

      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          scrollEnabled={false}
          contentContainerStyle={styles.listContent}
        />
      )}

      <View style={{ height: 80 }} />

      <PlaylistModal
        visible={showPlaylistModal}
        onClose={() => setShowPlaylistModal(false)}
        song={null}
        onSuccess={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold' },
  likedSection: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 25, padding: 15, borderRadius: 15 },
  likedIcon: { width: 60, height: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  likedInfo: { flex: 1 },
  likedTitle: { fontSize: 18, fontWeight: 'bold' },
  likedCount: { fontSize: 13, marginTop: 4 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, marginBottom: 15 },
  playlistsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginBottom: 15 },
  playlistsList: { paddingHorizontal: 20, paddingBottom: 20 },
  playlistCard: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 12, marginBottom: 12 },
  playlistIcon: { width: 50, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  playlistInfo: { flex: 1 },
  playlistName: { fontSize: 16, fontWeight: 'bold' },
  playlistCount: { fontSize: 12, marginTop: 4 },
  emptyPlaylists: { alignItems: 'center', justifyContent: 'center', padding: 40, marginHorizontal: 20, borderRadius: 15, marginBottom: 25 },
  emptyPlaylistsText: { fontSize: 16, marginTop: 10, textAlign: 'center' },
  listContent: { paddingHorizontal: 20, paddingBottom: 20 },
  categoryCard: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 12, marginBottom: 12 },
  categoryIconWrapper: { width: 48, height: 48, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  categoryIcon: { fontSize: 26 },
  categoryIconImg: { width: 28, height: 28 },
  categoryInfo: { flex: 1 },
  categoryName: { fontSize: 16, fontWeight: 'bold' },
  categoryCount: { fontSize: 12, marginTop: 4 },
});