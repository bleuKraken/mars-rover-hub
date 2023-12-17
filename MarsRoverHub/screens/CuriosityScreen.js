import React, { useState, useEffect } from 'react';
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
import API_KEY from '../apikey'; // Import the API key

function CuriosityScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the NASA API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${API_KEY}`
      );
      const result = await response.json();
      setData(result.latest_photos); // Update state with API data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => {
    console.log('Rendering Item:', item);
    return (
      <DailyPhotoCard
        date={item.earth_date}
        sol={item.sol}
        images={item.img_src ? [{ id: item.id, text: item.camera.full_name, source: { uri: item.img_src } }] : []}
        handleImagePress={() => handleImagePress(item)}
      />
    );
  };

  const handleImagePress = (item) => {
    if (item.source && item.source.uri) {
      setSelectedImage(item.source.uri);
      setModalVisible(true);
    } else {
      console.error('Image source or URI is undefined:', item);
    }
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={{ color: 'white', fontSize: 18 }}>Close</Text>
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
