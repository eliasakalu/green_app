export const musicData = {
  categories: [
    {
      id: 'pop',
      name: 'Pop Music',
      icon: '🎤',
      color: '#FF6B6B',
      subcategories: [
        {
          id: 'pop_hits',
          name: 'Pop Hits',
          songs: [
            {
              id: 1,
              title: 'Blinding Lights',
              artist: 'The Weeknd',
              cover_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
              duration: 200,
              genre: 'Pop',
              lyrics: [
                { timestamp: 0, text: "I've been tryna call" },
                { timestamp: 5, text: "I've been on my own for long enough" },
                { timestamp: 10, text: "Maybe you can show me how to love" },
                { timestamp: 15, text: "Maybe I'm going through withdrawals" },
                { timestamp: 20, text: "You don't even have to do too much" }
              ]
            },
            {
              id: 2,
              title: 'Shape of You',
              artist: 'Ed Sheeran',
              cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
              duration: 233,
              genre: 'Pop',
              lyrics: [
                { timestamp: 0, text: "The club isn't the best place to find a lover" },
                { timestamp: 5, text: "So the bar is where I go" },
                { timestamp: 10, text: "Me and my friends at the table doing shots" }
              ]
            },
            {
              id: 3,
              title: 'Levitating',
              artist: 'Dua Lipa',
              cover_url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
              duration: 203,
              genre: 'Pop',
              lyrics: [
                { timestamp: 0, text: "If you wanna run away with me" },
                { timestamp: 5, text: "I know a galaxy and I can take you for a ride" }
              ]
            }
          ]
        },
        {
          id: 'pop_ballads',
          name: 'Pop Ballads',
          songs: [
            {
              id: 4,
              title: 'Someone Like You',
              artist: 'Adele',
              cover_url: 'https://images.unsplash.com/photo-1459749411177-042180ce6742?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
              duration: 285,
              genre: 'Pop',
              lyrics: [
                { timestamp: 0, text: "I heard that you're settled down" },
                { timestamp: 10, text: "That you found a girl and you're married now" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'rock',
      name: 'Rock Music',
      icon: '🎸',
      color: '#4ECDC4',
      subcategories: [
        {
          id: 'classic_rock',
          name: 'Classic Rock',
          songs: [
            {
              id: 5,
              title: 'Bohemian Rhapsody',
              artist: 'Queen',
              cover_url: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
              duration: 354,
              genre: 'Rock',
              lyrics: [
                { timestamp: 0, text: "Is this the real life?" },
                { timestamp: 5, text: "Is this just fantasy?" },
                { timestamp: 10, text: "Caught in a landslide," }
              ]
            },
            {
              id: 6,
              title: 'Hotel California',
              artist: 'Eagles',
              cover_url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
              duration: 390,
              genre: 'Rock',
              lyrics: [
                { timestamp: 0, text: "On a dark desert highway" },
                { timestamp: 10, text: "Cool wind in my hair" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'electronic',
      name: 'Electronic',
      icon: '🎧',
      color: '#45B7D1',
      subcategories: [
        {
          id: 'edm',
          name: 'EDM',
          songs: [
            {
              id: 7,
              title: 'Midnight City',
              artist: 'M83',
              cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
              duration: 240,
              genre: 'Electronic',
              lyrics: [
                { timestamp: 0, text: "When the night is cold and lonely" },
                { timestamp: 5, text: "You're the only one who knows me" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'hiphop',
      name: 'Hip Hop',
      icon: '🎤',
      color: '#96CEB4',
      subcategories: [
        {
          id: 'rap',
          name: 'Rap',
          songs: [
            {
              id: 8,
              title: 'Lose Yourself',
              artist: 'Eminem',
              cover_url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400',
              audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
              duration: 326,
              genre: 'Hip Hop',
              lyrics: [
                { timestamp: 0, text: "Look, if you had one shot" },
                { timestamp: 5, text: "One opportunity" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const getAllSongs = () => {
  let allSongs = [];
  musicData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      allSongs = [...allSongs, ...subcategory.songs];
    });
  });
  return allSongs;
};

export const searchSongs = (query) => {
  if (!query || query.trim() === '') return [];
  const searchTerm = query.toLowerCase().trim();
  const allSongs = getAllSongs();
  return allSongs.filter(song => 
    song.title.toLowerCase().includes(searchTerm) || 
    song.artist.toLowerCase().includes(searchTerm) ||
    song.genre.toLowerCase().includes(searchTerm)
  );
};