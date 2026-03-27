import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  StyleSheet, ScrollView, ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { usePlayerStore } from '../store/usePlayerStore';
import { useThemeStore } from '../store/useThemeStore';
import { musicData } from '../data/musicData';
import { useTranslation } from 'react-i18next';

const FEATURED_SONG = {
  id: 0,
  title: 'Midnight City',
  artist: 'M83',
  cover_url: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800',
  audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  lyrics: [],
};

export default function HomeScreen({ navigation }) {
  const [songs, setSongs] = useState([]);
  const { setCurrentSong, stopPlayback } = usePlayerStore();
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const allSongs = [];
    musicData.categories.forEach((category) => {
      category.subcategories.forEach((sub) => allSongs.push(...sub.songs));
    });
    setSongs(allSongs.slice(0, 10));
  }, []);

  const playSong = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const displayedSongs = songs.slice(0, 10);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={[colors.primary + '33', 'transparent']} style={styles.topHeader}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>{getGreeting()}</Text>
        {/* Language switcher for testing */}
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
        <ImageBackground source={{ uri: FEATURED_SONG.cover_url }} style={styles.banner} imageStyle={{ borderRadius: 15 }}>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.bannerGradient}>
            <Text style={styles.featuredLabel}>FEATURED</Text>
            <Text style={styles.bannerTitle}>{FEATURED_SONG.title}</Text>
            <Text style={styles.bannerArtist}>{FEATURED_SONG.artist}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>Browse Categories</Text>
      <FlatList
        horizontal
        data={musicData.categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('Category', { category: item })}>
            <LinearGradient colors={[item.color, item.color + 'aa']} style={styles.categoryGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryName}>{item.name}</Text>
              <Text style={styles.categoryCount}>{item.subcategories.length} {t('collections')}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoriesList}
      />

      {displayedSongs.length > 0 && (
        <>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('popularsongs')}</Text>
          <FlatList
            horizontal
            data={displayedSongs}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.albumCard} onPress={() => playSong(item)}>
                <Image source={{ uri: item.cover_url }} style={styles.albumCover} />
                <Text style={[styles.albumTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
                <Text style={[styles.albumArtist, { color: theme.subText }]}>{item.artist}</Text>
              </TouchableOpacity>
            )}
          />

          <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('recommededforyou')}</Text>
          {displayedSongs.slice(0, 5).map((song) => (
            <TouchableOpacity key={song.id} style={styles.songRow} onPress={() => playSong(song)}>
              <Image source={{ uri: song.cover_url }} style={styles.rowCover} />
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
  categoryGradient: { flex: 1, padding: 15, justifyContent: 'flex-end' },
  categoryIcon: { fontSize: 40, marginBottom: 10 },
  categoryName: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  categoryCount: { fontSize: 10, color: '#fff' },
  albumCard: { marginLeft: 20, width: 140 },
  albumCover: { width: 140, height: 140, borderRadius: 10 },
  albumTitle: { fontWeight: 'bold', marginTop: 10 },
  albumArtist: { fontSize: 12 },
  songRow: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 15 },
  rowCover: { width: 55, height: 55, borderRadius: 5, marginRight: 15 },
  rowTitle: { fontSize: 16, fontWeight: '500' },
  rowArtist: { fontSize: 14 },
});