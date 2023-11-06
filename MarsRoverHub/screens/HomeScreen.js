import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


// MAIN FUNCTION
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen For Tab</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});