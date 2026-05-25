// App.js
// ─────────────────────────────────────────────────────────────
// Fix: AudioManager is mounted here at the root, outside the
// navigator, so it is NEVER unmounted. This means:
//  • Music keeps playing while you browse any tab.
//  • Opening PlayerScreen from MiniPlayer always finds live audio.
//  • MiniPlayer next-button works even when PlayerScreen is closed.
// ─────────────────────────────────────────────────────────────
import './i18n';

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search, Library, User } from 'lucide-react-native';

import { useThemeStore }   from './store/useThemeStore';
import { usePlayerStore }  from './store/usePlayerStore';
import { initDatabase, seedDatabase } from './data/database';
import { seedData }        from './data/seedData';

import HomeScreen       from './screens/HomeScreen';
import SearchScreen     from './screens/SearchScreen';
import CategoryScreen   from './screens/CategoryScreen';
import SongListScreen   from './screens/SongListScreen';
import PlayerScreen     from './screens/PlayerScreen';
import LibraryScreen    from './screens/LibraryScreen';
import ProfileScreen    from './screens/ProfileScreen';
import QueueScreen      from './screens/QueueScreen';
import MiniPlayer       from './components/MiniPlayer';
import LikedSongsScreen from './screens/LikedSongsScreen';
import AudioManager     from './components/AudioManager';   // ← NEW

const Tab   = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.card,
            borderTopWidth:  0,
            height:          70,
            paddingBottom:   12,
            elevation:       0,
            shadowOpacity:   0,
          },
          tabBarActiveTintColor:   colors.primary,
          tabBarInactiveTintColor: theme.subText,
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home')    return <Home    color={color} size={size} />;
            if (route.name === 'Search')  return <Search  color={color} size={size} />;
            if (route.name === 'Library') return <Library color={color} size={size} />;
            if (route.name === 'Profile') return <User    color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home"    component={HomeScreen}    />
        <Tab.Screen name="Search"  component={SearchScreen}  />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <MiniPlayer />
    </>
  );
}

export default function App() {
  const { isDark, colors } = useThemeStore();
  const { initStore }      = usePlayerStore();
  const [dbReady,     setDbReady]     = useState(false);
  const [setupError,  setSetupError]  = useState(null);

  useEffect(() => {
    const setup = async () => {
      try {
        await initDatabase();
        await seedDatabase(seedData);
        await initStore();
      } catch (e) {
        console.error('DB init error:', e);
        setSetupError(e.message || 'Failed to initialize database');
      } finally {
        setDbReady(true);
      }
    };
    setup();
  }, []);

  if (!dbReady) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#1DB954" />
      </View>
    );
  }

  if (setupError) {
    return (
      <View style={styles.loading}>
        <Text style={styles.errorText}>Failed to load database.</Text>
        <Text style={styles.errorSub}>{setupError}</Text>
      </View>
    );
  }

  const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.light.background,
      card:       colors.light.card,
      text:       colors.light.text,
    },
  };

  return (
    <>
      {/* ── AudioManager lives OUTSIDE the navigator so it never
           unmounts, keeping audio alive across all screens. ── */}
      <AudioManager />

      <NavigationContainer theme={isDark ? NavigationDarkTheme : CustomLightTheme}>
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main"      component={TabNavigator} />
          <Stack.Screen name="Category"  component={CategoryScreen} />
          <Stack.Screen name="SongList"  component={SongListScreen} />
          <Stack.Screen
            name="Player"
            component={PlayerScreen}
            options={{ presentation: 'modal', gestureEnabled: true }}
          />
          <Stack.Screen name="Queue"      component={QueueScreen} />
          <Stack.Screen name="LikedSongs" component={LikedSongsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems:     'center',
    backgroundColor: '#121212',
  },
  errorText: {
    color:      '#fff',
    fontSize:   18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorSub: {
    color:            '#B3B3B3',
    fontSize:         13,
    textAlign:        'center',
    paddingHorizontal: 30,
  },
});