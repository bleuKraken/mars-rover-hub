import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
  Image,
  StyleSheet,
  RefreshControl,
} from 'react-native';

const NewsHomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const openModal = article => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  // * Make API request to Spaceflight News API
  const fetchArticles = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles/?search=mars&title_contains=nasa',
      );
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchArticles();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const renderNewsItem = ({item}) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.newsItem}>
        <Image source={{uri: item.image_url}} style={styles.newsImage} />
        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text numberOfLines={3} style={styles.newsDescription}>
            {item.summary}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={item => item.id.toString()}
        renderItem={renderNewsItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <Modal visible={selectedArticle !== null} animationType="slide">
        <View style={styles.modalContent}>
          <Image
            source={{uri: selectedArticle?.image_url}}
            style={styles.modalImage}
          />
          <Text style={styles.modalTitle}>{selectedArticle?.title}</Text>
          <Text style={styles.modalDate}>{selectedArticle?.published_at}</Text>
          <Text style={styles.modalAuthor}>
            By {selectedArticle?.news_site}
          </Text>
          <Text style={styles.modalSummary}>{selectedArticle?.summary}</Text>
          <Text style={styles.modalContentText}>
            {selectedArticle?.content}
          </Text>

          <View style={styles.modalButton}>
            <Button title="Back" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    flexDirection: 'row',
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 16,
  },
  newsTextContainer: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  newsDescription: {
    color: '#ddd',
  },
  modalContent: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  modalImage: {
    height: 200,
    borderRadius: 5,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  modalDate: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 8,
  },
  modalAuthor: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 16,
  },
  modalSummary: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 16,
  },
  modalContentText: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 16,
  },
  modalButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
});

export default NewsHomeScreen;
