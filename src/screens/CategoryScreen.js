import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, StyleSheet, 
  ActivityIndicator, ImageBackground, SafeAreaView, Dimensions 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { getSubcategoriesByCategory, getSongsBySubcategory, initDatabase, seedDatabase, getAllCategories } from '../data/database';
import { seedData } from '../data/seedData';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 2 columns with padding

// Helper function to build image map safely
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

export default function CategoryScreen({ navigation, route }) {
  const { categoryId, categoryName, categoryColor, categoryIcon } = route.params;
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        console.log('CategoryScreen - Starting load for:', categoryId);
        
        await initDatabase();
        await seedDatabase(seedData);
        
        const allCategories = await getAllCategories();
        console.log('All categories in DB:', allCategories.map(c => ({ id: c.id, name: c.name })));
        
        const subs = await getSubcategoriesByCategory(categoryId);
        console.log('Raw subcategories from DB:', subs);
        console.log('Number of subcategories found:', subs.length);
        
        if (subs.length === 0) {
          const db = (await import('../data/database')).getDb();
          const allSubs = await (await db()).getAllAsync('SELECT * FROM subcategories');
          console.log('All subcategories in DB:', allSubs);
          setDebugInfo(`No subcategories found for ${categoryId}. Total subcategories in DB: ${allSubs.length}`);
        }
        
        const subsWithCount = await Promise.all(
          subs.map(async (sub) => {
            const songs = await getSongsBySubcategory(sub.id);
            console.log(`Subcategory ${sub.name} has ${songs.length} songs`);
            return { ...sub, songCount: songs.length };
          })
        );
        setSubcategories(subsWithCount);
      } catch (e) {
        console.error('CategoryScreen load error:', e);
        setDebugInfo(`Error: ${e.message}`);
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
          categoryColor,
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
            colors={[categoryColor + '99', categoryColor + '44']}
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
      {/* MAIN CONTAINER - MUST HAVE flex: 1 */}
      <View style={[styles.mainContainer, { backgroundColor: theme.background }]}>
        
        {/* HEADER SECTION */}
        <LinearGradient
          colors={[categoryColor + 'cc', categoryColor + '88', theme.background]}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>
          <Text style={styles.categoryIcon}>{categoryIcon}</Text>
          <Text style={styles.categoryName}>{categoryName}</Text>
          <Text style={styles.categoryDesc}>{subcategories.length} collections</Text>
        </LinearGradient>

        {/* LIST CONTAINER - MUST HAVE flex: 1 TO ALLOW SCROLLING */}
        <View style={styles.listContainer}>
          {loading ? (
            <View style={styles.centered}>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          ) : subcategories.length === 0 ? (
            <View style={styles.centered}>
              <Text style={[styles.emptyText, { color: theme.subText }]}>No collections found</Text>
              {debugInfo ? (
                <Text style={[styles.debugText, { color: theme.subText, marginTop: 10, fontSize: 12 }]}>
                  {debugInfo}
                </Text>
              ) : null}
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
  safeContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1, // CRITICAL: This makes the main container take full height
  },
  listContainer: {
    flex: 1, // CRITICAL: This makes the list container take remaining space after header
  },
  flatList: {
    flex: 1, // CRITICAL: This makes FlatList take all available space
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  debugText: {
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 5,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
    padding: 8,
  },
  categoryIcon: {
    fontSize: 70,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  categoryDesc: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginTop: 5,
  },
  listContent: {
    padding: 16,
    paddingBottom: 150, // Extra padding to ensure last item is visible
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
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
  cardImageBg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  cardImageStyle: {
    borderRadius: 15,
  },
  cardGradient: {
    flex: 1,
    padding: 12,
    justifyContent: 'flex-end',
  },
  cardGradientFallback: {
    minHeight: 140,
    justifyContent: 'flex-end',
  },
  subcategoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  songCount: {
    fontSize: 11,
    color: '#fff',
    opacity: 0.85,
    marginTop: 4,
  },
});