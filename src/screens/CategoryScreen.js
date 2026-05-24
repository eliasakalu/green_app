import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
  ActivityIndicator, ImageBackground, SafeAreaView, Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { getSubcategoriesByCategory, getSongsBySubcategory } from '../data/database';
import { seedData } from '../data/seedData';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const buildImageMap = () => {
  const map = {};
  try {
    if (seedData && seedData.categories && Array.isArray(seedData.categories)) {
      seedData.categories.forEach((cat) => {
        if (cat.subcategories && Array.isArray(cat.subcategories)) {
          cat.subcategories.forEach((sub) => {
            if (sub && sub.id && sub.image) {
              map[sub.id] = sub.image;
            }
          });
        }
      });
    }
  } catch (error) {
    console.error('Error building image map:', error);
  }
  return map;
};

const SUBCATEGORY_IMAGE_MAP = buildImageMap();

// FIX: safe color helper — never lets null/undefined crash LinearGradient
const safeColor = (color, fallback = '#1d5eb9') => {
  if (!color || typeof color !== 'string' || color === 'null') return fallback;
  return color;
};

export default function CategoryScreen({ navigation, route }) {
  const { categoryId, categoryName, categoryColor, categoryIcon } = route.params;
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);


  const baseColor = safeColor(categoryColor, colors.primary);

  useEffect(() => {
    const load = async () => {
      try {
        const subs = await getSubcategoriesByCategory(categoryId);
        const subsWithCount = await Promise.all(
          subs.map(async (sub) => {
            const songs = await getSongsBySubcategory(sub.id);
            return { ...sub, songCount: songs.length };
          })
        );
        setSubcategories(subsWithCount);
      } catch (e) {
        console.error('CategoryScreen load error:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [categoryId]);

  const renderSubcategory = ({ item, index }) => {
    const image = SUBCATEGORY_IMAGE_MAP[item.id];
    return (
      <TouchableOpacity
        style={[
          styles.subcategoryCard,
          {
            width: CARD_WIDTH,
            marginLeft: index % 2 === 0 ? 0 : 8,
            marginRight: index % 2 === 0 ? 8 : 0,
          }
        ]}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('SongList', {
          subcategoryId: item.id,
          subcategoryName: item.name,
          categoryColor: baseColor,
        })}
      >
        {image ? (
          <ImageBackground
            source={image}
            style={styles.cardImageBg}
            imageStyle={styles.cardImageStyle}
            resizeMode="cover"
          >
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.85)']}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Text style={styles.subcategoryName} numberOfLines={2}>{item.name}</Text>
              <Text style={styles.songCount}>{item.songCount} songs</Text>
            </LinearGradient>
          </ImageBackground>
        ) : (
          <LinearGradient
            colors={[baseColor + '99', baseColor + '44']}
            style={[styles.cardGradient, styles.cardGradientFallback]}
          >
            <Text style={styles.subcategoryName} numberOfLines={2}>{item.name}</Text>
            <Text style={styles.songCount}>{item.songCount} songs</Text>
          </LinearGradient>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: theme.background }]}>
      <View style={[styles.mainContainer, { backgroundColor: theme.background }]}>

        <LinearGradient
          colors={[baseColor + 'cc', baseColor + '88', theme.background]}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>

          {/* FIX: categoryIcon from DB is a stringified number — only render if it's actually an emoji/text */}
          {categoryIcon && isNaN(Number(categoryIcon)) && (
            <Text style={styles.categoryIcon}>{categoryIcon}</Text>
          )}

          <Text style={styles.categoryName}>{categoryName}</Text>
          <Text style={styles.categoryDesc}>{subcategories.length} collections</Text>
        </LinearGradient>

        <View style={styles.listContainer}>
          {loading ? (
            <View style={styles.centered}>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          ) : subcategories.length === 0 ? (
            <View style={styles.centered}>
              <Text style={[styles.emptyText, { color: theme.subText }]}>No collections found</Text>
            </View>
          ) : (
            <FlatList
              data={subcategories}
              keyExtractor={(item) => item.id}
              renderItem={renderSubcategory}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={true}
              indicatorStyle={isDark ? 'white' : 'black'}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              windowSize={10}
              removeClippedSubviews={true}
              nestedScrollEnabled={true}
              scrollEnabled={true}
              style={styles.flatList}
              numColumns={2}
              columnWrapperStyle={styles.columnWrapper}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1 },
  mainContainer: { flex: 1 },
  listContainer: { flex: 1 },
  flatList: { flex: 1 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  emptyText: { fontSize: 16, textAlign: 'center' },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 5,
  },
  backButton: { position: 'absolute', top: 60, left: 20, zIndex: 1, padding: 8 },
  categoryIcon: { fontSize: 70, marginBottom: 8 },
  categoryName: { fontSize: 28, fontWeight: 'bold', color: '#fff', textAlign: 'center', paddingHorizontal: 20 },
  categoryDesc: { fontSize: 14, color: '#fff', opacity: 0.9, marginTop: 5 },
  listContent: { padding: 16, paddingBottom: 150 },
  columnWrapper: { justifyContent: 'space-between', marginBottom: 16 },
  subcategoryCard: {
    height: 140,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImageBg: { flex: 1, width: '100%', height: '100%' },
  cardImageStyle: { borderRadius: 15 },
  cardGradient: { flex: 1, padding: 12, justifyContent: 'flex-end' },
  cardGradientFallback: { minHeight: 140, justifyContent: 'flex-end' },
  subcategoryName: {
    fontSize: 14, fontWeight: 'bold', color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  songCount: { fontSize: 11, color: '#fff', opacity: 0.85, marginTop: 4 },
});