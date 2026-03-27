import './i18n'; // must be first — initializes translations before any screen renders

import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search, Library, User } from 'lucide-react-native';

import { useThemeStore } from './store/useThemeStore';
import { usePlayerStore } from './store/usePlayerStore';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CategoryScreen from './screens/CategoryScreen';
import SongListScreen from './screens/SongListScreen';
import PlayerScreen from './screens/PlayerScreen';
import LibraryScreen from './screens/LibraryScreen';
import ProfileScreen from './screens/ProfileScreen';
import QueueScreen from './screens/QueueScreen';
import MiniPlayer from './components/MiniPlayer';

const Tab = createBottomTabNavigator();
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
            borderTopWidth: 0,
            height: 70,
            paddingBottom: 12,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: theme.subText,
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') return <Home color={color} size={size} />;
            if (route.name === 'Search') return <Search color={color} size={size} />;
            if (route.name === 'Library') return <Library color={color} size={size} />;
            if (route.name === 'Profile') return <User color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <MiniPlayer />
    </>
  );
}

export default function App() {
  const { isDark, colors } = useThemeStore();
  const { initStore } = usePlayerStore();

  useEffect(() => {
    initStore();
  }, []);

  const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.light.background,
      card: colors.light.card,
      text: colors.light.text,
    },
  };

  return (
    <NavigationContainer theme={isDark ? NavigationDarkTheme : CustomLightTheme}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="SongList" component={SongListScreen} />
        <Stack.Screen
          name="Player"
          component={PlayerScreen}
          options={{ presentation: 'modal', gestureEnabled: true }}
        />
        <Stack.Screen name="Queue" component={QueueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}