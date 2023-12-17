// CuriosityScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import DailyPhotoCard from '../components/DailyPhotosCard';
import SearchBarComponent from '../components/SearchBarComponent';

function CuriosityScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // * static data for testing,
  // ! remove when adding API
  const data = [
    {
      id: '1',
      date: 'October 16 2023',
      sol: '2208',
      images: [
        {
          id: '1a',
          text: 'Image 1 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '2a',
          text: 'Image 2 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '3a',
          text: 'Image 3 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '4a',
          text: 'Image 4 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '1',
          text: 'Image 1 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '5a',
          text: 'Image 5 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
      ],
    },
    {
      id: '2',
      date: 'October 15 2023',
      sol: '2207',
      images: [
        {
          id: '1b',
          text: 'Image 1 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '2b',
          text: 'Image 2 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
      ],
    },
    {
      id: '3',
      date: 'October 14 2023',
      sol: '2206',
      images: [
        {
          id: '1c',
          text: 'Image 1 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '2c',
          text: 'Image 2 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
      ],
    },
    {
      id: '4',
      date: 'October 13 2023',
      sol: '2205',
      images: [
        {
          id: '1d',
          text: 'Image 1 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        {
          id: '2d',
          text: 'Image 2 Text',
          source: require('../images/rovers/curiosity_hq.jpg'),
        },
        // Add other image objects with source paths
      ],
    },
  ];

  const renderItem = ({item}) => (
    <DailyPhotoCard
      date={item.date}
      sol={item.sol}
      images={item.images}
      handleImagePress={handleImagePress}
    />
  );

  const handleImagePress = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <SearchBarComponent />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Image
            source={selectedImage}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={{color: 'white', fontSize: 18}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default CuriosityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
});
