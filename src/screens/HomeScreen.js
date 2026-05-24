import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  StyleSheet, ScrollView, ImageBackground, ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { usePlayerStore } from '../store/usePlayerStore';
import { useThemeStore } from '../store/useThemeStore';
import { getAllCategories, getSubcategoriesByCategory, getAllSongs, initDatabase, seedDatabase } from '../data/database';
import { seedData } from '../data/seedData';
import { useTranslation } from 'react-i18next';
import { getImageSource } from '../utils/mediaSource';

import silaseImage from '../assets/images/silase.jpg';

const DEFAULT_CATEGORY_IMAGE = silaseImage;

const FEATURED_SONG = {
  id: 0,
  title: 'ሥላሴ ትትረመም',
  artist: 'M83',
  cover_url: silaseImage,
  audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  lyrics: [],
};

// Build image map from seedData (these are local require() numbers — never pass through nav params)
const buildCategoryImageMap = () => {
  const map = {};
  try {
    if (seedData && seedData.categories && Array.isArray(seedData.categories)) {
      seedData.categories.forEach((cat) => {
        if (cat && cat.id && cat.image) map[cat.id] = cat.image;
      });
    }
  } catch (e) {}
  return map;
};

// Build color map from seedData so we use the original color, not the DB string
const buildCategoryColorMap = () => {
  const map = {};
  try {
    if (seedData && seedData.categories && Array.isArray(seedData.categories)) {
      seedData.categories.forEach((cat) => {
        if (cat && cat.id && cat.color) map[cat.id] = cat.color;
      });
    }
  } catch (e) {}
  return map;
};

const CATEGORY_IMAGE_MAP = buildCategoryImageMap();
const CATEGORY_COLOR_MAP = buildCategoryColorMap();

export default function HomeScreen({ navigation }) {
  const [songs, setSongs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setCurrentSong, stopPlayback } = usePlayerStore();
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const load = async () => {
      try {
        await initDatabase();
        await seedDatabase(seedData);
        const [cats, popularSongs] = await Promise.all([
          getAllCategories(),
          getAllSongs(10, 0),
        ]);
        const catsWithSubs = await Promise.all(
          cats.map(async (cat) => {
            const subs = await getSubcategoriesByCategory(cat.id);
            return { ...cat, subcategories: subs };
          })
        );
        setCategories(catsWithSubs);
        setSongs(popularSongs);
      } catch (e) {
        console.error('HomeScreen load error:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const playSong = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return t('good_morning');
    if (hour >= 12 && hour < 18) return t('good_afternoon');
    return t('good_evening');
  };

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={[colors.primary + '33', 'transparent']} style={styles.topHeader}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>{getGreeting()}</Text>
        <View style={styles.langRow}>
          <TouchableOpacity onPress={() => i18n.changeLanguage('en')} style={styles.langBtn}>
            <Text style={[styles.langText, { color: i18n.language === 'en' ? colors.primary : theme.subText }]}>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => i18n.changeLanguage('am')} style={styles.langBtn}>
            <Text style={[styles.langText, { color: i18n.language === 'am' ? colors.primary : theme.subText }]}>አማ</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <TouchableOpacity onPress={() => playSong(FEATURED_SONG)} style={styles.bannerWrapper}>
        <ImageBackground source={FEATURED_SONG.cover_url} style={styles.banner} imageStyle={{ borderRadius: 15 }}>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.bannerGradient}>
            <Text style={styles.featuredLabel}>{t('featured')}</Text>
            <Text style={styles.bannerTitle}>{FEATURED_SONG.title}</Text>
            <Text style={styles.bannerArtist}>{FEATURED_SONG.artist}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('browse_category')}</Text>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const categoryImage = CATEGORY_IMAGE_MAP[item.id] || DEFAULT_CATEGORY_IMAGE;
          return (
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Category', {
                categoryId: item.id,
                categoryName: item.name,
      
              })}
            >
              <ImageBackground
                source={categoryImage}
                style={styles.categoryImageBg}
                imageStyle={styles.categoryImageStyle}
              >
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.75)']}
                  style={styles.categoryGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <Text style={styles.categoryName}>{item.name}</Text>
                  <Text style={styles.categoryCount}>{item.subcategories.length} {t('collections')}</Text>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.categoriesList}
      />

      {songs.length > 0 && (
        <>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('popularsongs')}</Text>
          <FlatList
            horizontal
            data={songs}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.albumCard} onPress={() => playSong(item)}>
                <Image source={getImageSource(item.cover_url)} style={styles.albumCover} />
                <Text style={[styles.albumTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
                <Text style={[styles.albumArtist, { color: theme.subText }]}>{item.artist}</Text>
              </TouchableOpacity>
            )}
          />

          <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('recommededforyou')}</Text>
          {songs.slice(0, 5).map((song) => (
            <TouchableOpacity key={song.id} style={styles.songRow} onPress={() => playSong(song)}>
              <Image source={getImageSource(song.cover_url)} style={styles.rowCover} />
              <View>
                <Text style={[styles.rowTitle, { color: theme.text }]}>{song.title}</Text>
                <Text style={[styles.rowArtist, { color: theme.subText }]}>{song.artist}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </>
      )}
      <View style={{ height: 140 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  topHeader: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  langRow: { flexDirection: 'row', marginTop: 8, gap: 12 },
  langBtn: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  langText: { fontSize: 13, fontWeight: 'bold' },
  bannerWrapper: { paddingHorizontal: 20, marginBottom: 10 },
  banner: { height: 250, width: '100%', justifyContent: 'flex-end', overflow: 'hidden' },
  bannerGradient: { padding: 20, height: '60%', justifyContent: 'flex-end' },
  featuredLabel: { color: '#1DB954', fontWeight: 'bold', fontSize: 12, letterSpacing: 1 },
  bannerTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  bannerArtist: { color: '#ccc', fontSize: 16 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginLeft: 20, marginVertical: 20 },
  categoriesList: { paddingLeft: 20, paddingRight: 10 },
  categoryCard: { width: 140, height: 140, marginRight: 15, borderRadius: 15, overflow: 'hidden' },
  categoryImageBg: { flex: 1, width: '100%', height: '100%' },
  categoryImageStyle: { borderRadius: 15 },
  categoryGradient: { flex: 1, padding: 10, justifyContent: 'flex-end' },
  categoryName: { fontSize: 13, fontWeight: 'bold', color: '#fff' },
  categoryCount: { fontSize: 10, color: '#fff', opacity: 0.85 },
  albumCard: { marginLeft: 20, width: 140 },
  albumCover: { width: 140, height: 140, borderRadius: 10 },
  albumTitle: { fontWeight: 'bold', marginTop: 10 },
  albumArtist: { fontSize: 12 },
  songRow: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 15 },
  rowCover: { width: 55, height: 55, borderRadius: 5, marginRight: 15 },
  rowTitle: { fontSize: 16, fontWeight: '500' },
  rowArtist: { fontSize: 14 },
});