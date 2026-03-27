import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useThemeStore } from '../store/useThemeStore';
import { usePlayerStore } from '../store/usePlayerStore';
import { Plus, X } from 'lucide-react-native';

export default function PlaylistModal({ visible, onClose, song, onSuccess }) {
  const { playlists, createPlaylist, addSongToPlaylist } = usePlayerStore();
  const [showCreate, setShowCreate] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [addingTo, setAddingTo] = useState(null);
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;

  const handleCreatePlaylist = async () => {
    if (!newPlaylistName.trim()) {
      Alert.alert('Error', 'Please enter a playlist name');
      return;
    }
    const newPlaylist = await createPlaylist(newPlaylistName.trim());
    setNewPlaylistName('');
    setShowCreate(false);
    if (song) {
      await addSongToPlaylist(newPlaylist.id, song);
      Alert.alert('Success', `"${song.title}" added to ${newPlaylist.name}`);
      if (onSuccess) onSuccess();
      onClose();
    } else {
      Alert.alert('Success', 'Playlist created!');
      if (onSuccess) onSuccess();
    }
  };

  const handleAddToPlaylist = async (playlist) => {
    if (!song) return;
    setAddingTo(playlist.id);
    await addSongToPlaylist(playlist.id, song);
    setAddingTo(null);
    Alert.alert('Success', `"${song.title}" added to ${playlist.name}`);
    if (onSuccess) onSuccess();
    onClose();
  };

  const renderPlaylist = ({ item }) => (
    <TouchableOpacity
      style={styles.playlistItem}
      onPress={() => handleAddToPlaylist(item)}
      disabled={addingTo === item.id}
    >
      <View style={styles.playlistInfo}>
        <Text style={[styles.playlistName, { color: theme.text }]}>{item.name}</Text>
        <Text style={[styles.playlistCount, { color: theme.subText }]}>{item.song_count || 0} songs</Text>
      </View>
      {addingTo === item.id
        ? <ActivityIndicator size="small" color={colors.primary} />
        : <Plus color={theme.text} size={20} />}
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, { color: theme.text }]}>
              {song ? 'Add to Playlist' : 'My Playlists'}
            </Text>
            <TouchableOpacity onPress={() => { setShowCreate(false); onClose(); }}>
              <X color={theme.text} size={24} />
            </TouchableOpacity>
          </View>

          {!showCreate ? (
            <>
              <TouchableOpacity
                style={[styles.createButton, { borderColor: colors.primary }]}
                onPress={() => setShowCreate(true)}
              >
                <Plus color={colors.primary} size={20} />
                <Text style={[styles.createButtonText, { color: colors.primary }]}>Create New Playlist</Text>
              </TouchableOpacity>

              {playlists.length > 0 ? (
                <FlatList
                  data={playlists}
                  keyExtractor={(item) => item.id}
                  renderItem={renderPlaylist}
                  showsVerticalScrollIndicator={false}
                />
              ) : (
                <View style={styles.emptyContainer}>
                  <Text style={[styles.emptyText, { color: theme.subText }]}>No playlists yet. Create your first!</Text>
                </View>
              )}
            </>
          ) : (
            <View style={styles.createForm}>
              <TextInput
                style={[styles.input, { backgroundColor: theme.card, color: theme.text, borderColor: theme.border }]}
                placeholder="Playlist name"
                placeholderTextColor={theme.subText}
                value={newPlaylistName}
                onChangeText={setNewPlaylistName}
                autoFocus
              />
              <View style={styles.createFormButtons}>
                <TouchableOpacity style={[styles.cancelBtn, { borderColor: theme.border }]} onPress={() => setShowCreate(false)}>
                  <Text style={[styles.cancelBtnText, { color: theme.text }]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.createBtn, { backgroundColor: colors.primary }]} onPress={handleCreatePlaylist}>
                  <Text style={styles.createBtnText}>Create</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, maxHeight: '80%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', flex: 1 },
  createButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 15 },
  createButtonText: { marginLeft: 8, fontSize: 16, fontWeight: '500' },
  playlistItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#28282833' },
  playlistInfo: { flex: 1 },
  playlistName: { fontSize: 16, fontWeight: '500' },
  playlistCount: { fontSize: 12, marginTop: 4 },
  createForm: { marginTop: 10 },
  input: { borderWidth: 1, borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 15 },
  createFormButtons: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  cancelBtn: { flex: 1, padding: 12, borderWidth: 1, borderRadius: 8, alignItems: 'center' },
  cancelBtnText: { fontSize: 16, fontWeight: '500' },
  createBtn: { flex: 1, padding: 12, borderRadius: 8, alignItems: 'center' },
  createBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  emptyContainer: { alignItems: 'center', marginTop: 50 },
  emptyText: { fontSize: 16, textAlign: 'center' },
});