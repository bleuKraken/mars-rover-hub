import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DailyPhotosCard = ({ date, sol, images, handleImagePress }) => {
  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.source)}>
      <View style={styles.imageWrapper}>
        <Image source={item.source} style={styles.image} />
        <Text style={styles.imageText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
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
        data={images}
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
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#111',
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
    color: '#fff', 
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
    color: '#fff', 
  },
});

export default DailyPhotosCard;
