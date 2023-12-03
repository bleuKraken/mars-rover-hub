import React from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import DailyPhotoCard from '../components/DailyPhotosCard';
import SearchBarComponent  from '../components/SearchBarComponent';
// MAIN FUNCTION
function CuriosityScreen() {
  // * Sample data for FlatList
  const data = [
    {id: '1', date: 'October 16 2023', sol: '2208'},
    {id: '2', date: 'October 16 2023', sol: '2208'},
    {id: '3', date: 'October 16 2023', sol: '2208'},
    {id: '4', date: 'October 16 2023', sol: '2208'},
    {id: '5', date: 'October 16 2023', sol: '2208'},
    {id: '6', date: 'October 16 2023', sol: '2208'},
    {id: '7', date: 'October 16 2023', sol: '2208'},
    {id: '8', date: 'October 16 2023', sol: '2208'},
  ];

  // Render item function for FlatList
  const renderItem = ({item}) => (
    <DailyPhotoCard date={item.date} sol={item.sol} />
  );

  return (
    <View style={styles.container}>

    <SearchBarComponent />

      {/* Replace manual rendering with FlatList */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default CuriosityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
