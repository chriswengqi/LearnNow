import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, barColor, fillColor }) => {
  const filledWidth = `${progress}%`;

  return (
    <View style={[styles.container, { backgroundColor: barColor }]}>
      <View style={[styles.filler, { width: filledWidth, backgroundColor: fillColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  filler: {
    height: '100%',
    borderRadius: 5
  }
});

export default ProgressBar;