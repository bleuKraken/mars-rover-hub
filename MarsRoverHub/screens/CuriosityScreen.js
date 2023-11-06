import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


// MAIN FUNCTION
function CuriosityScreen() {
  return (
    <View style={styles.container}>
      <Text>Curiosity Screen</Text>
    </View>
  );
}

export default CuriosityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});