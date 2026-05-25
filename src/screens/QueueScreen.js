// screens/QueueScreen.js
// ─────────────────────────────────────────────────────────────
// Fix: replaced hardcoded paddingTop: 50 with SafeAreaView
// so the header never clips on tall-notch Android/iOS devices.
// ─────────────────────────────────────────────────────────────
import React from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
  Image, Alert, SafeAreaView,
} from 'react-native';
import { usePlayerStore } from '../store/usePlayerStore';
import { useThemeStore } from '../store/useThemeStore';
import { getImageSource } from '../utils/mediaSource';
import { Trash2, ArrowLeft } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

export default function QueueScreen({ navigation }) {
  const { queue, removeFromQueue, clearQueue, setCurrentSong, stopPlayback } = usePlayerStore();
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const { t } = useTranslation();

  const playSongFromQueue = async (song) => {
    await stopPlayback();
    await setCurrentSong(song);
    navigation.navigate('Player');
  };

  const handleRemoveFromQueue = (songId, songTitle) => {
    Alert.alert('Remove from Queue', `Remove "${songTitle}" from queue?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => removeFromQueue(songId) },
    ]);
  };

  const handleClearQueue = () => {
    if (queue.length === 0) return;
    Alert.alert('Clear Queue', `Remove all ${queue.length} songs?`, [
      { text: 'Cancel',    style: 'cancel' },
      { text: 'Clear All', style: 'destructive', onPress: () => clearQueue() },
    ]);
  };

  const renderQueueItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.queueItem, { borderBottomColor: theme.border }]}
      onPress={() => playSongFromQueue(item)}
    >
      <Image source={getImageSource(item.cover_url)} style={styles.cover} />
      <View style={styles.info}>
        <Text style={[styles.title,  { color: theme.text }]}    numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.artist, { color: theme.subText }]}>{item.artist}</Text>
      </View>
      <View style={styles.rightActions}>
        <Text style={[styles.position, { color: theme.subText }]}>#{index + 1}</Text>
        <TouchableOpacity onPress={() => handleRemoveFromQueue(item.id, item.title)}>
          <Trash2 color={theme.subText} size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    // FIX: SafeAreaView replaces the hardcoded paddingTop: 50
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={theme.text} size={24} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>{t('queue')}</Text>
          {queue.length > 0
            ? <TouchableOpacity onPress={handleClearQueue}>
                <Text style={styles.clearButton}>{t('clear_all')}</Text>
              </TouchableOpacity>
            : <View style={{ width: 60 }} />
          }
        </View>

        {queue.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText,    { color: theme.subText }]}>{t('empty_queue')}</Text>
            <Text style={[styles.emptySubtext, { color: theme.subText }]}>{t('next_hymn_add')}</Text>
          </View>
        ) : (
          <FlatList
            data={queue}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={renderQueueItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer:  { flex: 1 },
  container:      { flex: 1 },
  header:         { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16 },
  headerTitle:    { fontSize: 20, fontWeight: 'bold' },
  clearButton:    { fontSize: 14, fontWeight: '500', color: '#E91429' },
  queueItem:      { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12, borderBottomWidth: 1 },
  cover:          { width: 50, height: 50, borderRadius: 5, marginRight: 12 },
  info:           { flex: 1 },
  title:          { fontSize: 16, fontWeight: '500' },
  artist:         { fontSize: 12, marginTop: 2 },
  rightActions:   { flexDirection: 'row', alignItems: 'center', gap: 12 },
  position:       { fontSize: 12, fontWeight: '500' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText:      { fontSize: 18, fontWeight: 'bold' },
  emptySubtext:   { fontSize: 14, marginTop: 10, textAlign: 'center', paddingHorizontal: 40 },
});