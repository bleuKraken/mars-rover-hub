import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const DailyPhotosCard = ({ date, sol }) => {
  // Sample data for FlatList
  const imageList = [
    { id: '1', text: 'Image 1 Text', source: require('../images/rovers/curiosity_hq.jpg') },
    { id: '2', text: 'Image 2 Text', source: require('../images/rovers/curiosity_hq.jpg') },
    { id: '3', text: 'Image 3 Text', source: require('../images/rovers/curiosity_hq.jpg') },
    { id: '4', text: 'Image 4 Text', source: require('../images/rovers/curiosity_hq.jpg') },
    { id: '5', text: 'Image 5 Text', source: require('../images/rovers/curiosity_hq.jpg') },
    { id: '6', text: 'Image 6 Text', source: require('../images/rovers/curiosity_hq.jpg') },
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.imageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{date}</Text>
        <Text style={styles.header}>Sol {sol}</Text>
      </View>

      {/* FlatList for horizontal scroll */}
      <FlatList
        data={imageList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  imageWrapper: {
    marginRight: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default DailyPhotosCard;
