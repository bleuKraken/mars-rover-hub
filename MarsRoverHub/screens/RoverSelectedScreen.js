import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


// MAIN FUNCTION
function RoverSelectedScreen() {
  return (
    <View style={styles.container}>
      <Text>Rover Selected Screen</Text>
    </View>
  );
}

export default RoverSelectedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});