import React from 'react';
import { Button, StyleSheet, View,TouchableOpacity} from 'react-native';
import Animated, { useSharedValue, withSpring,withTiming } from 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';
export default function Try() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withTiming(width.value + 50, {
        duration: 500,
        easing: Easing.ease,
      });
  };

  return (
<View style={styles.container}>
  <TouchableOpacity onPress={handlePress}>
    <Animated.View style={{ ...styles.box, width }} />
  </TouchableOpacity>  
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
});
