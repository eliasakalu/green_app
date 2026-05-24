// data/database.js
// ─────────────────────────────────────────────────────────────
// Full SQLite layer for 500+ offline songs.
// Install first:  npx expo install expo-sqlite
//
// HOW RE-SEEDING WORKS:
// Bump DB_VERSION by 1 any time you change seedData.js
// The app will wipe and re-insert all data on next launch.
// ─────────────────────────────────────────────────────────────

import * as SQLite from 'expo-sqlite';

const DB_VERSION = 7;  // ← bump this number whenever you change seedData.js

let db = null;

export const getDb = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync('elias_music.db');
  }
  return db;
};

// Export parseSong so other files can use it if needed
const parseAssetReference = (value) => {
  if (value === null || value === undefined) return value;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    if (/^\d+$/.test(value)) return Number(value);
    return value;
  }
  return value;
};

export const parseSong = (row) => ({
  ...row,
  cover_url: parseAssetReference(row.cover_url),
  audio_url: parseAssetReference(row.audio_url),
  lyrics: (() => {
    try {
      return JSON.parse(row.lyrics);
    } catch {
      return [];
    }
  })(),
});

export const initDatabase = async () => {
  const db = await getDb();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS meta (
      key   TEXT PRIMARY KEY,
      value TEXT
    );

    CREATE TABLE IF NOT EXISTS categories (
      id        TEXT PRIMARY KEY,
      name      TEXT NOT NULL,
      icon      TEXT,
      color     TEXT,
      image     TEXT
    );

    CREATE TABLE IF NOT EXISTS subcategories (
      id          TEXT PRIMARY KEY,
      category_id TEXT NOT NULL,
      name        TEXT NOT NULL,
      image       TEXT,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    );

    CREATE TABLE IF NOT EXISTS songs (
      id             INTEGER PRIMARY KEY,
      subcategory_id TEXT NOT NULL,
      title          TEXT NOT NULL,
      artist         TEXT NOT NULL,
      cover_url      TEXT,
      audio_url      TEXT NOT NULL,
      duration       INTEGER DEFAULT 0,
      genre          TEXT,
      lyrics         TEXT DEFAULT '[]',
      FOREIGN KEY (subcategory_id) REFERENCES subcategories(id)
    );

    CREATE INDEX IF NOT EXISTS idx_songs_subcategory ON songs(subcategory_id);
    CREATE INDEX IF NOT EXISTS idx_songs_search ON songs(title, artist, genre);
    CREATE INDEX IF NOT EXISTS idx_sub_category ON subcategories(category_id);
  `);

  return db;
};

export const seedDatabase = async (musicData) => {
  const db = await getDb();
  
  // Make sure musicData exists and has categories
  if (!musicData || !musicData.categories || !Array.isArray(musicData.categories)) {
    console.error('Invalid musicData provided to seedDatabase');
    return;
  }

  // Check stored version
  let storedVersion = 0;
  try {
    const row = await db.getFirstAsync("SELECT value FROM meta WHERE key = 'db_version'");
    if (row) storedVersion = parseInt(row.value, 10);
  } catch (error) {
    console.log('Error reading version, assuming first run:', error);
  }

  // If version matches, skip seeding
  if (storedVersion === DB_VERSION) {
    console.log('Database already seeded with current version');
    return;
  }

  console.log(`DB version mismatch (stored: ${storedVersion}, current: ${DB_VERSION}). Re-seeding...`);

  try {
    // Wipe existing data
    await db.execAsync(`
      DELETE FROM songs;
      DELETE FROM subcategories;
      DELETE FROM categories;
      DELETE FROM meta;
    `);

    // Insert fresh data
    await db.withTransactionAsync(async () => {
      for (const category of musicData.categories) {
        // Insert category with image if provided
        await db.runAsync(
          'INSERT OR REPLACE INTO categories (id, name, icon, color, image) VALUES (?, ?, ?, ?, ?)',
          [category.id, category.name, category.icon || '', category.color || '#000000', category.image || null]
        );

        // Insert subcategories
        for (const sub of category.subcategories) {
          // Safety check for sub object
          if (!sub || !sub.id) {
            console.warn('Invalid subcategory found, skipping:', sub);
            continue;
          }
          
          await db.runAsync(
            'INSERT OR REPLACE INTO subcategories (id, category_id, name, image) VALUES (?, ?, ?, ?)',
            [sub.id, category.id, sub.name, sub.image || null]
          );

          // Safety check for songs array
          if (!sub.songs || !Array.isArray(sub.songs)) {
            console.warn(`No songs array found for subcategory: ${sub.id}`);
            continue;
          }

          // Insert songs
          for (const song of sub.songs) {
            if (!song || !song.id) {
              console.warn('Invalid song found, skipping:', song);
              continue;
            }
            
            const coverUrl = typeof song.cover_url === 'number'
              ? String(song.cover_url)
              : (song.cover_url || '');
            const audioUrl = typeof song.audio_url === 'number'
              ? String(song.audio_url)
              : (song.audio_url || '');

            await db.runAsync(
              `INSERT OR REPLACE INTO songs
                (id, subcategory_id, title, artist, cover_url, audio_url, duration, genre, lyrics)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                song.id,
                sub.id,
                song.title,
                song.artist,
                coverUrl,
                audioUrl,
                song.duration || 0,
                song.genre || '',
                JSON.stringify(song.lyrics || []),
              ]
            );
          }
        }
      }

      // Save new version
      await db.runAsync(
        "INSERT OR REPLACE INTO meta (key, value) VALUES ('db_version', ?)",
        [String(DB_VERSION)]
      );
    });

    // Verify seeding worked
    const categoryCount = await db.getFirstAsync("SELECT COUNT(*) as count FROM categories");
    const subcategoryCount = await db.getFirstAsync("SELECT COUNT(*) as count FROM subcategories");
    const songCount = await db.getFirstAsync("SELECT COUNT(*) as count FROM songs");
    console.log(`✅ Seeding complete: ${categoryCount?.count || 0} categories, ${subcategoryCount?.count || 0} subcategories, ${songCount?.count || 0} songs`);
    
  } catch (error) {
    console.error('Error during database seeding:', error);
    throw error; // Re-throw so calling code knows seeding failed
  }
};

export const getAllCategories = async () => {
  const db = await getDb();
  try {
    return await db.getAllAsync('SELECT * FROM categories ORDER BY rowid');
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
};

export const getSubcategoriesByCategory = async (categoryId) => {
  const db = await getDb();
  try {
    const rows = await db.getAllAsync(
      'SELECT * FROM subcategories WHERE category_id = ? ORDER BY rowid',
      [categoryId]
    );
    return rows;
  } catch (error) {
    console.error('Error getting subcategories:', error);
    return [];
  }
};

export const getSongsBySubcategory = async (subcategoryId) => {
  const db = await getDb();
  try {
    const rows = await db.getAllAsync(
      'SELECT * FROM songs WHERE subcategory_id = ? ORDER BY rowid',
      [subcategoryId]
    );
    return rows.map(parseSong);
  } catch (error) {
    console.error('Error getting songs:', error);
    return [];
  }
};

export const getAllSongs = async (limit = 50, offset = 0) => {
  const db = await getDb();
  try {
    const rows = await db.getAllAsync(
      'SELECT * FROM songs ORDER BY rowid LIMIT ? OFFSET ?',
      [limit, offset]
    );
    return rows.map(parseSong);
  } catch (error) {
    console.error('Error getting all songs:', error);
    return [];
  }
};

export const searchSongs = async (query) => {
  if (!query || query.trim() === '') return [];
  const db = await getDb();
  try {
    const term = `%${query.trim()}%`;
    const rows = await db.getAllAsync(
      `SELECT * FROM songs
       WHERE title LIKE ? OR artist LIKE ? OR genre LIKE ?
       LIMIT 100`,
      [term, term, term]
    );
    return rows.map(parseSong);
  } catch (error) {
    console.error('Error searching songs:', error);
    return [];
  }
};

export const getSongById = async (id) => {
  const db = await getDb();
  try {
    const row = await db.getFirstAsync('SELECT * FROM songs WHERE id = ?', [id]);
    return row ? parseSong(row) : null;
  } catch (error) {
    console.error('Error getting song by id:', error);
    return null;
  }
};

export const getTotalSongCount = async () => {
  const db = await getDb();
  try {
    const result = await db.getFirstAsync('SELECT COUNT(*) as count FROM songs');
    return result ? result.count : 0;
  } catch (error) {
    console.error('Error getting total song count:', error);
    return 0;
  }
};