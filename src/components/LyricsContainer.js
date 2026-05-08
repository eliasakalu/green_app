import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useThemeStore } from '../store/useThemeStore';

const { height } = Dimensions.get('window');

export default function LyricsContainer({ lyrics, currentTime }) {
  const flatListRef = useRef(null);
  const { isDark, colors } = useThemeStore();
  const theme = isDark ? colors.dark : colors.light;

  // ==================== BEHAVIOR SETTINGS ====================
  // 🔧 AUTO-SCROLL BEHAVIOR: Modify these settings
  const [userScrolling, setUserScrolling] = useState(false);
  const userScrollTimer = useRef(null);
  
  // 🔧 SCROLL TIMING: Change how long auto-scroll pauses after manual scroll (in milliseconds)
  const AUTO_SCROLL_DELAY = 4000; // 4 seconds - modify this value
  
  // 🔧 VIEW POSITION: Where the active lyric appears on screen (0 = top, 0.5 = center, 1 = bottom)
  const VIEW_POSITION = 0.4; // 0.4 = slightly above center - adjust this value
  // ============================================================

  const activeIndex = useMemo(() => {
    if (!lyrics || lyrics.length === 0) return -1;
    return lyrics.findIndex((l, i) => {
      const next = lyrics[i + 1];
      return currentTime >= l.timestamp && (!next || currentTime < next.timestamp);
    });
  }, [currentTime, lyrics]);

  // Auto-scroll only when user is NOT manually scrolling
  useEffect(() => {
    if (activeIndex !== -1 && flatListRef.current && !userScrolling) {
      try {
        flatListRef.current.scrollToIndex({
          index: activeIndex,
          animated: true,
          viewPosition: VIEW_POSITION, // 🔧 Adjust this value to change where active line sits
        });
      } catch (_) {}
    }
  }, [activeIndex, userScrolling]);

  // When user scrolls manually, pause auto-scroll
  const handleScrollBegin = useCallback(() => {
    setUserScrolling(true);
    if (userScrollTimer.current) clearTimeout(userScrollTimer.current);
  }, []);

  const handleScrollEnd = useCallback(() => {
    userScrollTimer.current = setTimeout(() => {
      setUserScrolling(false);
    }, AUTO_SCROLL_DELAY); // 🔧 Change this value to adjust auto-scroll resume delay
  }, []);

  // "Jump to current" button — tapping resumes auto-scroll immediately
  const jumpToCurrent = useCallback(() => {
    setUserScrolling(false);
    if (userScrollTimer.current) clearTimeout(userScrollTimer.current);
    if (activeIndex !== -1 && flatListRef.current) {
      try {
        flatListRef.current.scrollToIndex({
          index: activeIndex,
          animated: true,
          viewPosition: VIEW_POSITION,
        });
      } catch (_) {}
    }
  }, [activeIndex]);

  if (!lyrics || lyrics.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: theme.subText }]}>
          No lyrics available
        </Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    const isActive = index === activeIndex;
    return (
      <View style={styles.lineWrapper}>
        <Text
          style={[
            styles.lyricText,
            isActive
              ? [
                  styles.activeLine, 
                  { 
                    color: colors.primary,  //  ACTIVE COLOR: Change active lyric highlight color
                  }
                ]
              : { 
                  color: theme.text, 
                  opacity: 0.35,  // 🔧 INACTIVE OPACITY: Change dimmed lyric opacity (0-1)
                },
          ]}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        ref={flatListRef}
        data={lyrics}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ 
          paddingVertical: 8,  // 🔧 SCROLL PADDING: Adjust vertical padding inside scroll view
        }}
        showsVerticalScrollIndicator={false}  // 🔧 Set to true to show scroll bar
        scrollEnabled={true}  // 🔧 Set to false to disable user scrolling
        onScrollBeginDrag={handleScrollBegin}
        onMomentumScrollEnd={handleScrollEnd}
        onScrollEndDrag={handleScrollEnd}
        initialNumToRender={20}  // 🔧 PERFORMANCE: Number of items to render initially
        onScrollToIndexFailed={(info) => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
              viewPosition: VIEW_POSITION,
            });
          }, 200);  // 🔧 RETRY DELAY: Delay before retrying scroll on failure
        }}
      />

      {/* "Back to current" button - appears when user scrolls away */}
      {userScrolling && (
        <TouchableOpacity
          style={[
            styles.jumpButton, 
            { 
              backgroundColor: colors.primary,  // 🔧 BUTTON COLOR: Jump button background
            }
          ]}
          onPress={jumpToCurrent}
        >
          <Text style={styles.jumpButtonText}>
            ↩ Back to current line  {/* 🔧 BUTTON TEXT: Change button label */}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// ==================== STYLESHEET - MODIFY ALL VISUAL PROPERTIES HERE ====================
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    // 🔧 WRAPPER: Add background color or borders here if needed
  },
  lineWrapper: {
    paddingHorizontal: 20,  // 🔧 LINE PADDING: Horizontal padding for each lyric line
    marginVertical: 5,      // 🔧 LINE SPACING: Vertical space between lyric lines
    // 🔧 Modify these values to adjust lyric positioning and spacing
  },
  lyricText: {
    fontSize: 16,           // 🔧 FONT SIZE: Default lyric text size
    fontWeight: '500',      // 🔧 FONT WEIGHT: 'normal', 'bold', '100'-'900'
    textAlign: 'center',    // 🔧 TEXT ALIGN: 'left', 'center', 'right'
    lineHeight: 24,         // 🔧 LINE HEIGHT: Space between lines of text
    // 🔧 Modifications:
    // - Increase fontSize for larger text (e.g., 18)
    // - Change textAlign to 'left' for left-aligned lyrics
    // - Adjust lineHeight for tighter/looser spacing
  },
  activeLine: {
    opacity: 1,
    fontSize: 18,           // 🔧 ACTIVE FONT SIZE: Size of currently singing lyric
    fontWeight: '700',      // 🔧 ACTIVE FONT WEIGHT: Make active lyric bold
    transform: [{ scale: 1.02 }],  // 🔧 ACTIVE SCALE: Slight zoom effect on active lyric
    // 🔧 Modifications:
    // - Set scale to 1 for no zoom effect
    // - Increase fontSize to 20 for more emphasis
    // - Remove transform for no scaling
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,           // 🔧 EMPTY TEXT SIZE: Font size when no lyrics
    textAlign: 'center',
  },
  jumpButton: {
    position: 'absolute',
    bottom: 10,             // 🔧 BUTTON POSITION: Distance from bottom
    alignSelf: 'center',
    paddingHorizontal: 16,  // 🔧 BUTTON PADDING: Horizontal padding inside button
    paddingVertical: 8,     // 🔧 BUTTON PADDING: Vertical padding inside button
    borderRadius: 20,       // 🔧 BUTTON SHAPE: Border radius (0 = square, 20 = pill shape)
    opacity: 0.9,           // 🔧 BUTTON OPACITY: Transparency (0-1)
    // 🔧 Modifications:
    // - Set bottom to 20 to move button higher
    // - Change borderRadius to 8 for less rounded corners
    // - Add shadow properties for depth
  },
  jumpButtonText: {
    color: '#fff',          // 🔧 BUTTON TEXT COLOR: Change jump button text color
    fontSize: 13,           // 🔧 BUTTON TEXT SIZE: Font size of button text
    fontWeight: 'bold',     // 🔧 BUTTON TEXT WEIGHT: Make button text bold
  },
});

// ==================== ADDITIONAL CUSTOMIZATION OPTIONS ====================

/*
📝 **QUICK CUSTOMIZATION GUIDE:**

1. **Change Active Lyric Color:**
   - Find `color: colors.primary` in renderItem (around line 80)
   - Replace with any color: '#FF6B6B', '#4A90E2', '#FFB347'

2. **Adjust Lyric Text Size:**
   - Default text: Change `fontSize: 16` in lyricText (line 148)
   - Active text: Change `fontSize: 18` in activeLine (line 160)

3. **Change Spacing Between Lines:**
   - Modify `marginVertical: 5` in lineWrapper (line 143)
   - Modify `lineHeight: 24` in lyricText (line 151)

4. **Adjust Auto-Scroll Behavior:**
   - Change `AUTO_SCROLL_DELAY = 4000` (line 21) - milliseconds to wait before resuming
   - Change `VIEW_POSITION = 0.4` (line 23) - where active line appears on screen

5. **Modify Jump Button:**
   - Change button text: Line 113 - "↩ Back to current line"
   - Change button color: Line 110 - `backgroundColor: colors.primary`
   - Adjust button position: `bottom: 10` in jumpButton (line 174)

6. **Text Alignment:**
   - Change `textAlign: 'center'` to 'left' for left-aligned lyrics (line 150)

7. **Active Lyric Effects:**
   - Remove zoom effect by deleting `transform: [{ scale: 1.02 }]` (line 163)
   - Add text shadow for highlighted effect

8. **Performance Settings:**
   - Adjust `initialNumToRender={20}` (line 104) for faster initial load
   - Reduce to 10 for very long lyric files

9. **Scroll Behavior:**
   - Set `scrollEnabled={false}` (line 102) to disable user scrolling
   - Set `showsVerticalScrollIndicator={true}` (line 101) to show scrollbar

10. **Opacity of Inactive Lyrics:**
    - Change `opacity: 0.35` (line 86) - higher value = less dimmed
    - Set to 1 for no dimming effect
*/