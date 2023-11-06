import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


// MAIN FUNCTION
function SpiritScreen() {
  return (
    <View style={styles.container}>
      <Text>Spirit Screen</Text>
    </View>
  );
}

export default SpiritScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});