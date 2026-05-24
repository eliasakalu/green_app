import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { User, Moon, Sun, Music, Heart, Folder } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { getTotalSongCount, getAllCategories } from '../data/database';
import { useTranslation } from 'react-i18next';

export default function ProfileScreen() {
  const { isDark, toggleTheme, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const [totalSongs, setTotalSongs] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const load = async () => {
      try {
        const [count, cats] = await Promise.all([getTotalSongCount(), getAllCategories()]);
        setTotalSongs(count);
        setTotalCategories(cats.length);
      } catch (e) {}
    };
    load();
  }, []);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <View style={[styles.avatarCircle, { backgroundColor: theme.card }]}>
          <User color={colors.primary} size={50} />
        </View>
        <Text style={[styles.userName, { color: theme.text }]}>{t('company_title')}</Text>
        <Text style={[styles.userEmail, { color: theme.subText }]}>{t('company_slogan')}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: theme.card }]}>
          <Music color={colors.primary} size={24} />
          <Text style={[styles.statNumber, { color: theme.text }]}>{totalSongs}</Text>
          <Text style={[styles.statLabel, { color: theme.subText }]}>{t('songs')}</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: theme.card }]}>
          <Folder color={colors.primary} size={24} />
          <Text style={[styles.statNumber, { color: theme.text }]}>{totalCategories}</Text>
          <Text style={[styles.statLabel, { color: theme.subText }]}>{t('categories')}</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: theme.card }]}>
          <Heart color={colors.primary} size={24} />
          <Text style={[styles.statNumber, { color: theme.text }]}>∞</Text>
          <Text style={[styles.statLabel, { color: theme.subText }]}>{t('offline')}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              {isDark ? <Moon color={theme.text} size={22} /> : <Sun color={theme.text} size={22} />}
              <Text style={[styles.rowText, { color: theme.text }]}>{t('dark_mode')}</Text>
            </View>
            <Switch value={isDark} onValueChange={toggleTheme} trackColor={{ false: '#767577', true: colors.primary }} />
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Music color={theme.text} size={22} />
              <Text style={[styles.rowText, { color: theme.text }]}>{t('offline_app')}</Text>
            </View>
            <Text style={[styles.badge, { color: colors.primary }]}>{t('status_active')}</Text>
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Folder color={theme.text} size={22} />
              <Text style={[styles.rowText, { color: theme.text }]}>{t('total_hyms')}</Text>
            </View>
            <Text style={[styles.badge, { color: theme.subText }]}>{totalSongs} {t('songs')}</Text>
          </View>
        </View>

        <View style={styles.versionContainer}>
                <Text style={[styles.versionText, { color: theme.subText }]}>{t('company_title')} v1.0.0
              </Text>

              <View style={styles.creditsContainer}>
                <Text style={[styles.creditText, { color: theme.subText }]}>
                  {t('developed_by')} {t('creator')}
                </Text>
                <Text style={[styles.creditText, { color: theme.subText }]}>
                  {t('content_reviewed_by')} {t('reviewer_name')}
                </Text>
                <Text style={[styles.emailText, { color: theme.primary || '#007AFF' }]}>
                  {t('contact_us')}: eliasgetachew950@gmail.com
                </Text>
              </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: 'center', paddingVertical: 50 },
  avatarCircle: { width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  userName: { fontSize: 22, fontWeight: 'bold', marginTop: 5 },
  userEmail: { fontSize: 14, marginTop: 5 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginBottom: 30 },
  statCard: { alignItems: 'center', padding: 15, borderRadius: 12, minWidth: 100 },
  statNumber: { fontSize: 24, fontWeight: 'bold', marginTop: 8 },
  statLabel: { fontSize: 12, marginTop: 4 },
  section: { paddingHorizontal: 20 },
  card: { borderRadius: 15, paddingHorizontal: 15 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 },
  rowLeft: { flexDirection: 'row', alignItems: 'center' },
  rowText: { marginLeft: 15, fontSize: 16, fontWeight: '500' },
  separator: { height: 1 },
  badge: { fontSize: 14, fontWeight: '500' },
  versionContainer: { alignItems: 'center', marginTop: 40, marginBottom: 80 },
  versionText: { fontSize: 12, marginTop: 5 },
});