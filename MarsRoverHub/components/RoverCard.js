import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


// MAIN FUNCTION
function RoverCard() {
  return (
    <View style={styles.container}>
      <Text>Home Screen Inside of Screens Folder</Text>
    </View>
  );
}

export default RoverCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});