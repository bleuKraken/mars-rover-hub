// Import necessary components from React and React Native
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Create the SearchBarComponent
const SearchBarComponent = ({ onSearch }) => {
  // State to manage the search input text
  const [searchText, setSearchText] = useState('');

  // Function to handle search button press
  const handleSearch = () => {
    // Call the onSearch prop with the current search text
    // onSearch(searchText);
    console.log("Search: " + searchText);
  };

  return (
    <View style={styles.container}>
      {/* Search input */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#ffffff" // Light text color
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />

      {/* Search button */}
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333', // Dark background color
    padding: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: '#ffffff', // Light text color
  },
  button: {
    backgroundColor: '#ffffff', // Light background color for the button
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#333', // Dark text color for the button
  },
});

// Export the SearchBarComponent
export default SearchBarComponent;