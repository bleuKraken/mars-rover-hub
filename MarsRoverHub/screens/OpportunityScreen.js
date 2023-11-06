import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


// MAIN FUNCTION
function OpportunityScreen() {
  return (
    <View style={styles.container}>
      <Text>Opportunity Screen</Text>
    </View>
  );
}

export default OpportunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});