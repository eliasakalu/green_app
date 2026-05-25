// screens/HomeScreen.js
// ─────────────────────────────────────────────────────────────
// Fix: playSong now queues the rest of the popular-songs list
// so Next / Previous work after tapping a song on the home screen.
// ─────────────────────────────────────────────────────────────
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
import schoolLogo  from '../../assets/icon.png';

const DEFAULT_CATEGORY_IMAGE = silaseImage;

const FEATURED_SONG = {
  id:        'featured_silase',   // FIX: 0 is falsy — AudioManager skips it
  title:     'ሥላሴ ትትረመም',
  artist:    'M83',
  cover_url: silaseImage,
  audio_url: require('../assets/music/Silasen_Amesgnu.opus'),
  lyrics: [
    { timestamp: 0,   text: 'ሥላሴን አመስግኑ(2) የምድር ፍጥረታት ዘምሩ እልል በሉ' },
    { timestamp: 28,  text: 'በስመ አብ ወወልድ ወመንፈስ ቅዱስ ምስጋና ይገባል ከምንም በፊት' },
    { timestamp: 40,  text: 'ዓለማትን ሁሉ ከፈጠረ ጌታ ምስጋና ይገባል ከጠዋት እስከ ማታ' },
    { timestamp: 54,  text: 'ኪሩቤል ሱራፌል የሚያመሰግኑህ መላእክት በሰማይ የሚዘምሩልህ' },
    { timestamp: 116, text: 'እኛም የአዳም ልጆች እንዘምራለን በሰማይ በምድር እንጠራሃለን' },
    { timestamp: 118, text: 'ብራብ በሥላሴ እጠግባለሁኝ ብጠማም በአምላኬ እረካለሁኝ' },
    { timestamp: 129, text: 'ሥላሴ አምባዬ ክብሬም ናቸውና ሁሌም ይመሩኛል በሕይወት ጎዳና' },
  ],
};

const buildCategoryImageMap = () => {
  const map = {};
  try {
    if (seedData?.categories) {
      seedData.categories.forEach((cat) => {
        if (cat?.id && cat.image) map[cat.id] = cat.image;
      });
    }
  } catch (_) {}
  return map;
};

const CATEGORY_IMAGE_MAP = buildCategoryImageMap();

let logoSource = null;
try { logoSource = schoolLogo; } catch (_) {}

export default function HomeScreen({ navigation }) {
  const [songs,      setSongs]      = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading,    setLoading]    = useState(true);

  const { setCurrentSong, addMultipleToQueue } = usePlayerStore();
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

  // ── FIX: Don't call stopPlayback here — AudioManager tears down
  //    the old sound internally when currentSong.id changes.
  //    Calling stopPlayback first can race with AudioManager and
  //    leave no sound loaded at all.
  const playSong = async (song, index, songList) => {
    await setCurrentSong(song);
    const rest = songList ? songList.slice(index + 1) : [];
    if (rest.length > 0) await addMultipleToQueue(rest);
    navigation.navigate('Player');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5  && hour < 12) return t('good_morning');
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
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* ── Header ── */}
      <LinearGradient colors={[colors.primary + '33', 'transparent']} style={styles.topHeader}>
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>{getGreeting()}</Text>
            <View style={styles.langRow}>
              <TouchableOpacity onPress={() => i18n.changeLanguage('en')} style={styles.langBtn}>
                <Text style={[styles.langText, { color: i18n.language === 'en' ? colors.primary : theme.subText }]}>EN</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => i18n.changeLanguage('am')} style={styles.langBtn}>
                <Text style={[styles.langText, { color: i18n.language === 'am' ? colors.primary : theme.subText }]}>አማ</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.logoCircle, { backgroundColor: 'transparent' }]}>
            {logoSource ? (
              <Image source={logoSource} style={styles.logoImage} resizeMode="cover" />
            ) : (
              <View style={styles.logoFallback}>
                <Text style={[styles.logoInitials, { color: colors.primary }]}>ፊ{'\n'}ሰ</Text>
              </View>
            )}
          </View>
        </View>
        <Text style={[styles.appNameSub, { color: theme.subText }]}>{t('app_subtitle')}</Text>
      </LinearGradient>

      {/* ── Featured banner ── */}
      <TouchableOpacity
        onPress={() => playSong(FEATURED_SONG, 0, [FEATURED_SONG])}
        style={styles.bannerWrapper}
      >
        <ImageBackground
          source={FEATURED_SONG.cover_url}
          style={styles.banner}
          imageStyle={{ borderRadius: 15 }}
        >
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.bannerGradient}>
            <Text style={styles.featuredLabel}>{t('featured')}</Text>
            <Text style={styles.bannerTitle}>{FEATURED_SONG.title}</Text>
            <Text style={styles.bannerArtist}>{FEATURED_SONG.artist}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>

      {/* ── Categories ── */}
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
                categoryId:   item.id,
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

      {/* ── Popular & Recommended ── */}
      {songs.length > 0 && (
        <>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('popularsongs')}</Text>
          <FlatList
            horizontal
            data={songs}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.albumCard}
                onPress={() => playSong(item, index, songs)}
              >
                <Image source={getImageSource(item.cover_url)} style={styles.albumCover} />
                <Text style={[styles.albumTitle,  { color: theme.text }]}    numberOfLines={1}>{item.title}</Text>
                <Text style={[styles.albumArtist, { color: theme.subText }]}>{item.artist}</Text>
              </TouchableOpacity>
            )}
          />

          <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('recommededforyou')}</Text>
          {songs.slice(0, 5).map((song, index) => (
            <TouchableOpacity
              key={song.id}
              style={styles.songRow}
              onPress={() => playSong(song, index, songs.slice(0, 5))}
            >
              <Image source={getImageSource(song.cover_url)} style={styles.rowCover} />
              <View style={styles.songRowInfo}>
                <Text style={[styles.rowTitle,  { color: theme.text }]}    numberOfLines={1}>{song.title}</Text>
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
  container:          { flex: 1 },
  centered:           { flex: 1, justifyContent: 'center', alignItems: 'center' },
  topHeader:          { paddingTop: 56, paddingHorizontal: 20, paddingBottom: 14 },
  headerRow:          { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerLeft:         { flex: 1, marginRight: 14 },
  headerTitle:        { fontSize: 24, fontWeight: 'bold' },
  appNameSub:         { fontSize: 12, marginTop: 6, letterSpacing: 0.3 },
  langRow:            { flexDirection: 'row', marginTop: 6, gap: 8 },
  langBtn:            { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 6 },
  langText:           { fontSize: 13, fontWeight: 'bold' },
  logoCircle:         { width: 58, height: 58, borderRadius: 9, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' },
  logoImage:          { width: '100%', height: '100%' },
  logoFallback:       { justifyContent: 'center', alignItems: 'center', flex: 1 },
  logoInitials:       { fontSize: 15, fontWeight: '800', textAlign: 'center', lineHeight: 18 },
  bannerWrapper:      { paddingHorizontal: 20, marginBottom: 10 },
  banner:             { height: 220, width: '100%', justifyContent: 'flex-end', overflow: 'hidden' },
  bannerGradient:     { padding: 20, height: '60%', justifyContent: 'flex-end' },
  featuredLabel:      { color: '#1DB954', fontWeight: 'bold', fontSize: 11, letterSpacing: 1 },
  bannerTitle:        { color: '#fff', fontSize: 26, fontWeight: 'bold' },
  bannerArtist:       { color: '#ccc', fontSize: 14 },
  sectionTitle:       { fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginVertical: 16 },
  categoriesList:     { paddingLeft: 20, paddingRight: 10 },
  categoryCard:       { width: 130, height: 130, marginRight: 12, borderRadius: 14, overflow: 'hidden' },
  categoryImageBg:    { flex: 1, width: '100%', height: '100%' },
  categoryImageStyle: { borderRadius: 14 },
  categoryGradient:   { flex: 1, padding: 10, justifyContent: 'flex-end' },
  categoryName:       { fontSize: 13, fontWeight: 'bold', color: '#fff' },
  categoryCount:      { fontSize: 10, color: '#fff', opacity: 0.85 },
  albumCard:          { marginLeft: 20, width: 130 },
  albumCover:         { width: 130, height: 130, borderRadius: 10 },
  albumTitle:         { fontWeight: 'bold', marginTop: 8, fontSize: 13 },
  albumArtist:        { fontSize: 11, marginTop: 2 },
  songRow:            { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 14 },
  songRowInfo:        { flex: 1, minWidth: 0 },
  rowCover:           { width: 52, height: 52, borderRadius: 8, marginRight: 14 },
  rowTitle:           { fontSize: 15, fontWeight: '600' },
  rowArtist:          { fontSize: 12, marginTop: 2 },
});