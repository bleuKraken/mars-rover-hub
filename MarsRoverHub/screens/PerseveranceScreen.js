import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


// MAIN FUNCTION
function PerseveranceScreen() {
  return (
    <View style={styles.container}>
      <Text>Perseverance Screen</Text>
    </View>
  );
}

export default PerseveranceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});