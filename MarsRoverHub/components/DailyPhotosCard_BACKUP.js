// Import necessary modules
import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

// Create a functional component for the card
const DailyPhotosCard = ({date, sol}) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{date}</Text>
        <Text style={styles.header}>Sol {sol}</Text>
      </View>

      {/* Horizontal scroll view for images */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}>
        {/* Image 1 */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../images/rovers/curiosity_hq.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Image 1 Text</Text>
        </View>

        {/* Image 2 */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../images/rovers/curiosity_hq.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Image 2 Text</Text>
        </View>

        {/* Image 3 */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../images/rovers/curiosity_hq.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Image 3 Text</Text>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
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
