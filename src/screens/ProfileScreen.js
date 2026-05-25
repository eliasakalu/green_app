import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Switch, ScrollView, Image,
} from 'react-native';
import { User, Moon, Sun, Music, Heart, Folder } from 'lucide-react-native';
import { useThemeStore } from '../store/useThemeStore';
import { getTotalSongCount, getAllCategories } from '../data/database';
import { useTranslation } from 'react-i18next';

// Place your school logo at assets/images/school_logo.png
// If the file doesn't exist yet, the User icon fallback is shown automatically
const defaultLogo = require('../../assets/icon.png');

export default function ProfileScreen() {
  const { isDark, toggleTheme, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;
  const [totalSongs, setTotalSongs] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const load = async () => {
      try {
        const [count, cats] = await Promise.all([
          getTotalSongCount(),
          getAllCategories(),
        ]);
        setTotalSongs(count);
        setTotalCategories(cats.length);
      } catch (e) {
        console.error('ProfileScreen load error:', e);
      }
    };
    load();
  }, []);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* ── Header / Logo ── */}
      <View style={[styles.header, { backgroundColor: colors.primary + '18' }]}>
        <View style={styles.avatarCircle}>
          {defaultLogo ? (
            <Image source={defaultLogo} style={styles.avatarImage} resizeMode="cover" />
          ) : (
            <User color={colors.primary} size={50} />
          )}
        </View>
        <Text style={[styles.appName, { color: theme.text }]}>{t('app_name')}</Text>
        <Text style={[styles.appSlogan, { color: theme.subText }]}>{t('app_subtitle')}</Text>
      </View>

      {/* ── Stats ── */}
      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: theme.card }]}>
          <Music color={colors.primary} size={22} />
          <Text style={[styles.statNumber, { color: theme.text }]}>{totalSongs}</Text>
          <Text style={[styles.statLabel, { color: theme.subText }]}>{t('songs')}</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: theme.card }]}>
          <Folder color={colors.primary} size={22} />
          <Text style={[styles.statNumber, { color: theme.text }]}>{totalCategories}</Text>
          <Text style={[styles.statLabel, { color: theme.subText }]}>{t('categories')}</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: theme.card }]}>
          <Heart color={colors.primary} size={22} />
          <Text style={[styles.statNumber, { color: theme.text }]}>100%</Text>
          <Text style={[styles.statLabel, { color: theme.subText }]}>{t('offline')}</Text>
        </View>
      </View>

      {/* ── Settings ── */}
      <View style={styles.section}>
        <Text style={[styles.sectionLabel, { color: theme.subText }]}>Settings</Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              {isDark ? <Moon color={theme.text} size={20} /> : <Sun color={theme.text} size={20} />}
              <Text style={[styles.rowText, { color: theme.text }]}>{t('dark_mode')}</Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: '#767577', true: colors.primary }}
              thumbColor="#fff"
            />
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Music color={theme.text} size={20} />
              <Text style={[styles.rowText, { color: theme.text }]}>{t('offline_app')}</Text>
            </View>
            <View style={[styles.activePill, { backgroundColor: colors.primary + '22' }]}>
              <Text style={[styles.activePillText, { color: colors.primary }]}>{t('status_active')}</Text>
            </View>
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Folder color={theme.text} size={20} />
              <Text style={[styles.rowText, { color: theme.text }]}>{t('total_hyms')}</Text>
            </View>
            <Text style={[styles.rowValue, { color: theme.subText }]}>{totalSongs} {t('songs')}</Text>
          </View>
        </View>
      </View>

      {/* ── About / Credits ── */}
      <View style={styles.section}>
        <Text style={[styles.sectionLabel, { color: theme.subText }]}>{t('about_section')}</Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>

          {/* App name + version */}
          <View style={styles.creditRow}>
            <Text style={[styles.creditLabel, { color: theme.subText }]}>Application</Text>
            <Text style={[styles.creditValue, { color: theme.text }]}>{t('app_name')}</Text>
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />
          <View style={styles.creditRow}>
            <Text style={[styles.creditLabel, { color: theme.subText }]}>Version</Text>
            <Text style={[styles.creditValue, { color: theme.text }]}>1.0.0</Text>
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />

          {/* Development credits */}
          <View style={styles.creditRow}>
            <Text style={[styles.creditLabel, { color: theme.subText }]}>Developed by</Text>
            <Text style={[styles.creditValue, { color: theme.text }]}>{t('creator')}</Text>
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />
          

          {/* Contact */}
          <View style={styles.creditRow}>
            <Text style={[styles.creditLabel, { color: theme.subText }]}>Contact</Text>
            <Text style={[styles.emailText, { color: colors.primary }]}>{t('contact_email')}</Text>
          </View>
                    <View style={[styles.separator, { backgroundColor: theme.border }]} />
          <View style={styles.creditRow}>
            <Text style={[styles.creditLabel, { color: theme.subText }]}>Content reviewed by</Text>
            <Text style={[styles.creditValue, { color: theme.text }]}>{t('reviewer_name')}</Text>
          </View>
          <View style={[styles.separator, { backgroundColor: theme.border }]} />
          <View style={styles.creditRow}>
            <Text style={[styles.creditLabel, { color: theme.subText }]}>Fenote Selam Contact</Text>
            <Text style={[styles.emailText, { color: colors.primary }]}>{t('fss_contact_email')}</Text>
          </View>
        </View>

        {/* Copyright footer */}
        <Text style={[styles.copyright, { color: theme.subText }]}>
          © {new Date().getFullYear()} Finoteselam Sunday School.{''}All rights reserved.
        </Text>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: { alignItems: 'center', paddingTop: 56, paddingBottom: 28, paddingHorizontal: 20 },
  avatarCircle: {
    width: 100, height: 100,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 14,
  },
  avatarImage: { width: 100, height: 100 },
  appName: { fontSize: 20, fontWeight: '800', textAlign: 'center', letterSpacing: 0.3 },
  appSlogan: { fontSize: 13, marginTop: 4, textAlign: 'center' },

  statsContainer: {
    flexDirection: 'row', justifyContent: 'space-around',
    paddingHorizontal: 20, marginTop: 8, marginBottom: 24, gap: 10,
  },
  statCard: { flex: 1, alignItems: 'center', padding: 14, borderRadius: 14, gap: 4 },
  statNumber: { fontSize: 22, fontWeight: 'bold', marginTop: 6 },
  statLabel: { fontSize: 11 },

  section: { paddingHorizontal: 20, marginBottom: 20 },
  sectionLabel: {
    fontSize: 11, fontWeight: '700', letterSpacing: 1,
    textTransform: 'uppercase', marginBottom: 8, marginLeft: 4,
  },
  card: { borderRadius: 14, paddingHorizontal: 16, overflow: 'hidden' },

  row: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', paddingVertical: 16,
  },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rowText: { fontSize: 15, fontWeight: '500' },
  rowValue: { fontSize: 14 },
  separator: { height: StyleSheet.hairlineWidth },

  activePill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  activePillText: { fontSize: 12, fontWeight: '600' },

  creditRow: {
    flexDirection: 'row', alignItems: 'flex-start',
    justifyContent: 'space-between', paddingVertical: 14, gap: 12,
  },
  creditLabel: { fontSize: 13, flex: 1 },
  creditValue: { fontSize: 13, fontWeight: '600', textAlign: 'right', flex: 2 },
  emailText: { fontSize: 12, fontWeight: '500', textAlign: 'right', flex: 2 },
  copyright: { fontSize: 11, textAlign: 'center', marginTop: 14, lineHeight: 18, opacity: 0.6 },
});