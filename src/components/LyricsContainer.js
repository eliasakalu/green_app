import React, { useEffect, useRef, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useThemeStore } from '../store/useThemeStore';

const { height } = Dimensions.get('window');

export default function LyricsContainer({ lyrics, currentTime }) {
  const flatListRef = useRef(null);
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;

  const activeIndex = useMemo(() => {
    if (!lyrics || lyrics.length === 0) return -1;
    return lyrics.findIndex((l, i) => {
      const next = lyrics[i + 1];
      return currentTime >= l.timestamp && (!next || currentTime < next.timestamp);
    });
  }, [currentTime, lyrics]);

  useEffect(() => {
    if (activeIndex !== -1 && flatListRef.current) {
      try {
        flatListRef.current.scrollToIndex({ index: activeIndex, animated: true, viewPosition: 0.5 });
      } catch (_) {}
    }
  }, [activeIndex]);

  if (!lyrics || lyrics.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: theme.subText }]}>No lyrics available</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    const isActive = index === activeIndex;
    return (
      <View style={styles.lineWrapper}>
        <Text style={[styles.lyricText, isActive ? styles.activeLine : { color: theme.text, opacity: 0.3 }]}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={lyrics}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ paddingVertical: height / 4 }}
      showsVerticalScrollIndicator={false}
      initialNumToRender={20}
      onScrollToIndexFailed={(info) => {
        setTimeout(() => {
          flatListRef.current?.scrollToIndex({ index: info.index, animated: true, viewPosition: 0.5 });
        }, 200);
      }}
    />
  );
}

const styles = StyleSheet.create({
  lineWrapper: { paddingHorizontal: 30, marginVertical: 15 },
  lyricText: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  activeLine: { color: '#1DB954', opacity: 1, transform: [{ scale: 1.05 }] },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, textAlign: 'center' },
});