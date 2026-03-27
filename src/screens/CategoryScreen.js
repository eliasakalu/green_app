import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';

export default function CategoryScreen({ navigation, route }) {
  const { category } = route.params;
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;

  const renderSubcategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.subcategoryCard, { backgroundColor: theme.card }]}
      onPress={() => navigation.navigate('SongList', { categoryId: category.id, subcategory: item })}
    >
      <LinearGradient colors={[category.color + '33', 'transparent']} style={styles.cardGradient}>
        <Text style={styles.subcategoryIcon}>🎵</Text>
        <Text style={[styles.subcategoryName, { color: theme.text }]}>{item.name}</Text>
        <Text style={[styles.songCount, { color: theme.subText }]}>{item.songs.length} songs</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LinearGradient
        colors={[category.color + 'cc', theme.background]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.categoryIcon}>{category.icon}</Text>
        <Text style={styles.categoryName}>{category.name}</Text>
        <Text style={styles.categoryDesc}>{category.subcategories.length} collections</Text>
      </LinearGradient>

      <FlatList
        data={category.subcategories}
        keyExtractor={(item) => item.id}
        renderItem={renderSubcategory}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 60, paddingBottom: 40, alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  backButton: { position: 'absolute', top: 60, left: 20, zIndex: 1 },
  categoryIcon: { fontSize: 80, marginBottom: 10 },
  categoryName: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  categoryDesc: { fontSize: 14, color: '#fff', opacity: 0.9, marginTop: 5 },
  listContent: { padding: 20, paddingBottom: 140 },
  subcategoryCard: { borderRadius: 15, marginBottom: 15, overflow: 'hidden' },
  cardGradient: { padding: 20 },
  subcategoryIcon: { fontSize: 32, marginBottom: 10 },
  subcategoryName: { fontSize: 18, fontWeight: 'bold' },
  songCount: { fontSize: 12, marginTop: 5 },
});