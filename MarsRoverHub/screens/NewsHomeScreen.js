// NewsList.js
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

const articles = [
  {
    id: '1',
    title: 'Article 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'John Doe',
    date: '2023-12-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Leo in vitae turpis massa. A pellentesque sit amet porttitor eget dolor morbi non arcu. Sit amet consectetur adipiscing elit. \n \nElit at imperdiet dui accumsan sit amet nulla. Morbi tristique senectus et netus et malesuada fames. \n \nAliquam etiam erat velit scelerisque in. Viverra nam libero justo laoreet. \n \n Massa tincidunt dui ut ornare lectus sit. Tortor condimentum lacinia quis vel eros donec ac odio. Ullamcorper morbi tincidunt ornare massa eget egestas. Congue quisque egestas diam in arcu cursus euismod. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Fames ac turpis egestas maecenas pharetra convallis posuere. \n \n ',
  },
  {
    id: '2',
    title: 'Article 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Smith',
    date: '2023-12-02',
    content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa.\n \n A pellentesque sit amet porttitor eget dolor morbi non arcu. Sit amet consectetur adipiscing elit. Elit at imperdiet dui accumsan sit amet nulla. \n \n Morbi tristique senectus et netus et malesuada fames. Aliquam etiam erat velit scelerisque in. Viverra nam libero justo laoreet. Massa tincidunt dui ut ornare lectus sit.  \n \nTortor condimentum lacinia quis vel eros donec ac odio. Ullamcorper morbi tincidunt ornare massa eget egestas. Congue quisque egestas diam in arcu cursus euismod. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. \n \n Fames ac turpis egestas maecenas pharetra convallis posuere. Egestas maecenas pharetra convallis posuere morbi leo. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. ',
  },
];

const NewsList = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = article => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  const renderNewsItem = ({item}) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View
        style={{padding: 16, borderBottomWidth: 1, borderBottomColor: '#555'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={{marginTop: 8, color: '#ddd'}}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <FlatList
        data={articles}
        keyExtractor={item => item.id}
        renderItem={renderNewsItem}
      />

      <Modal visible={selectedArticle !== null} animationType="slide">
        <View style={{flex: 1, padding: 16, backgroundColor: '#000'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              marginTop: 42,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              {selectedArticle?.title}
            </Text>
            <Text style={{color: '#ddd'}}>{selectedArticle?.date}</Text>
          </View>
          <Text style={{fontSize: 14, color: '#aaa', marginBottom: 8}}>
            By {selectedArticle?.author}
          </Text>
          <Text style={{fontSize: 16, marginBottom: 16, color: '#ddd'}}>
            {selectedArticle?.description}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 8,
              color: '#fff',
            }}>
            Full Article
          </Text>
          <Text style={{color: '#ddd'}}>{selectedArticle?.content}</Text>
          <View style={{position: 'absolute', top: 16, left: 16, zIndex: 1}}>
            <Button title="Back" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewsList;
