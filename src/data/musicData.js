// ============================================================
// REAL SONGS:
//
// Each song needs:
//   id        – unique number (never repeat this across ALL songs)
//   title     – song name
//   artist    – artist / choir name
//   cover_url – image URL  OR  require('../assets/covers/song1.jpg')
//   audio_url – audio URL  OR  require('../assets/audio/song1.mp3')
//   duration  – length in seconds (e.g. 185 = 3:05)
//   genre     – text genre label
//   lyrics    – array of { timestamp (seconds), text } — use [] if none
//
// LOCAL files (works fully offline):
//   audio_url: require('../assets/audio/song1.mp3')
//   cover_url: require('../assets/covers/song1.jpg')
//
// REMOTE files (needs internet):
//   audio_url: 'https://...'
//   cover_url: 'https://...'
// ============================================================

export const musicData = {
  categories: [

    // ── CATEGORY 1 ──────────────────────────────────────────
    {
      id: 'yewede_amet',
      name: 'የዓወደ አመት መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#FF6B6B',
      subcategories: [

        // ── Subcategory 1.1 ─────────────────────────────────
        {
          id: 'ezil_araray',
          name: 'እዝል ዓራራይ ቅኝት',
          songs: [
            {
              id: 1,
              title: 'Shape of You',
              artist: 'Ed Sheeran',
              cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
              duration: 233,
              genre: 'እዝል',
              lyrics: [
                { timestamp: 0, text: "The club isn't the best place to find a lover" },
                { timestamp: 5, text: "So the bar is where I go" },
                { timestamp: 10, text: "Me and my friends at the table doing shots" },
              ],
            },
            {
              id: 2,
              title: 'Levitating',
              artist: 'Dua Lipa',
              cover_url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
              duration: 203,
              genre: 'እዝል',
              lyrics: [
                { timestamp: 0, text: "If you wanna run away with me" },
                { timestamp: 5, text: "I know a galaxy and I can take you for a ride" },
              ],
            },
            // ↓ Paste more song objects here
          ],
        },

        // ── Subcategory 1.2 ─────────────────────────────────
        {
          id: 'geez_1',
          name: 'ግዕዝ 1',
          songs: [
            {
              id: 3,
              title: 'Someone Like You',
              artist: 'Adele',
              cover_url: 'https://images.unsplash.com/photo-1459749411177-042180ce6742?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
              duration: 285,
              genre: 'ግዕዝ',
              lyrics: [
                { timestamp: 0, text: "I heard that you're settled down" },
                { timestamp: 10, text: "That you found a girl and you're married now" },
              ],
            },
          ],
        },

        // ── Subcategory 1.3 ─────────────────────────────────
        {
          id: 'geez_2',
          name: 'ግዕዝ 2',
          songs: [
            {
              id: 4,
              title: 'Bohemian Rhapsody',
              artist: 'Queen',
              cover_url: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
              duration: 354,
              genre: 'ግዕዝ',
              lyrics: [
                { timestamp: 0, text: "Is this the real life?" },
                { timestamp: 5, text: "Is this just fantasy?" },
              ],
            },
          ],
        },

        // ── Subcategory 1.4 ─────────────────────────────────
        {
          id: 'geez_3',
          name: 'ግዕዝ 3',
          songs: [
            {
              id: 5,
              title: 'Hotel California',
              artist: 'Eagles',
              cover_url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
              duration: 390,
              genre: 'ግዕዝ',
              lyrics: [
                { timestamp: 0, text: "On a dark desert highway" },
                { timestamp: 10, text: "Cool wind in my hair" },
              ],
            },
          ],
        },

        // ── Subcategory 1.5 ─────────────────────────────────
        {
          id: 'ezil_araray_2',
          name: 'እዝል | አራራይ',
          songs: [
            {
              id: 6,
              title: 'Midnight City',
              artist: 'M83',
              cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
              duration: 240,
              genre: 'እዝል',
              lyrics: [
                { timestamp: 0, text: "When the night is cold and lonely" },
                { timestamp: 5, text: "You're the only one who knows me" },
              ],
            },
          ],
        },

      ],
    },

    // ── CATEGORY 2 — copy this block to add more categories ─
    // {
    //   id: 'unique_category_id',
    //   name: 'Category Name',
    //   icon: '🎵',
    //   color: '#45B7D1',
    //   subcategories: [
    //     {
    //       id: 'unique_sub_id',
    //       name: 'Subcategory Name',
    //       songs: [
    //         {
    //           id: 100,           // ← must be unique across ALL songs
    //           title: '...',
    //           artist: '...',
    //           cover_url: require('../assets/covers/song100.jpg'),
    //           audio_url: require('../assets/audio/song100.mp3'),
    //           duration: 210,
    //           genre: '...',
    //           lyrics: [],
    //         },
    //       ],
    //     },
    //   ],
    // },

  ],
};

// ── Helpers ─────────────────────────────────────────────────
// These are used by SearchScreen, HomeScreen, ProfileScreen etc.
// Do not modify unless you know what you're doing.

/**
 * Returns every song from all categories, deduplicated by id.
 * Safe to call with 500+ songs — runs once and returns a flat array.
 */
export const getAllSongs = () => {
  const allSongs = [];
  const seenIds = new Set();
  musicData.categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      (subcategory.songs || []).forEach((song) => {
        if (!seenIds.has(song.id)) {
          seenIds.add(song.id);
          allSongs.push(song);
        }
      });
    });
  });
  return allSongs;
};

/**
 * Search songs by title, artist, or genre.
 */
export const searchSongs = (query) => {
  if (!query || query.trim() === '') return [];
  const term = query.toLowerCase().trim();
  return getAllSongs().filter(
    (song) =>
      song.title.toLowerCase().includes(term) ||
      song.artist.toLowerCase().includes(term) ||
      song.genre.toLowerCase().includes(term),
  );
};

/**
 * Get a single song by its id.
 */
export const getSongById = (id) => {
  return getAllSongs().find((song) => song.id === id) || null;
};

/**
 * Get all songs matching a specific genre string.
 */
export const getSongsByGenre = (genre) => {
  return getAllSongs().filter(
    (song) => song.genre.toLowerCase() === genre.toLowerCase(),
  );
};