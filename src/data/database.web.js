// data/database.web.js
// Web fallback using in-memory storage to test in web
let memoryDb = {
  categories: [],
  subcategories: [],
  songs: [],
};

// Helper function to parse song lyrics
const parseSong = (row) => ({
  ...row,
  lyrics: (() => {
    try { 
      return typeof row.lyrics === 'string' ? JSON.parse(row.lyrics) : (row.lyrics || []);
    } catch {
      return [];
    }
  })(),
});

export const getDb = async () => null;

export const initDatabase = async () => {
  console.log('Web mode: Using in-memory database');
  return null;
};

export const seedDatabase = async (musicData) => {
  if (memoryDb.categories.length > 0) return;
  
  if (!musicData || !musicData.categories) {
    console.error('Invalid musicData provided');
    return;
  }
  
  for (const category of musicData.categories) {
    memoryDb.categories.push({ ...category });
    for (const sub of category.subcategories) {
      if (sub && sub.id) {
        memoryDb.subcategories.push({ ...sub, category_id: category.id });
        if (sub.songs && Array.isArray(sub.songs)) {
          for (const song of sub.songs) {
            memoryDb.songs.push({ ...song, subcategory_id: sub.id });
          }
        }
      }
    }
  }
  console.log(`Web seeding complete: ${memoryDb.categories.length} categories, ${memoryDb.subcategories.length} subcategories, ${memoryDb.songs.length} songs`);
};

export const getAllCategories = async () => {
  return memoryDb.categories;
};

export const getSubcategoriesByCategory = async (categoryId) => {
  return memoryDb.subcategories.filter(sub => sub.category_id === categoryId);
};

export const getSongsBySubcategory = async (subcategoryId) => {
  const songs = memoryDb.songs.filter(song => song.subcategory_id === subcategoryId);
  return songs.map(parseSong);
};

export const getAllSongs = async (limit = 50, offset = 0) => {
  const songs = memoryDb.songs.slice(offset, offset + limit);
  return songs.map(parseSong);
};

export const searchSongs = async (query) => {
  const term = query.toLowerCase().trim();
  const results = memoryDb.songs.filter(song => 
    (song.title && song.title.toLowerCase().includes(term)) ||
    (song.artist && song.artist.toLowerCase().includes(term)) ||
    (song.genre && song.genre.toLowerCase().includes(term))
  );
  return results.map(parseSong);
};

export const getSongById = async (id) => {
  const song = memoryDb.songs.find(song => song.id === id);
  return song ? parseSong(song) : null;
};

export const getTotalSongCount = async () => {
  return memoryDb.songs.length;
};