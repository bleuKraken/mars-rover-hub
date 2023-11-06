import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

// ! This component currrently doesnt work due to local image location being passed in as a variable
// ! RN doesnt like that 
//const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

// const image = {uri: '../images/rovers/curiosity_hq.jpg'};
// * This image location works
// const image = require('../images/rovers/curiosity_hq.jpg');


// MAIN FUNCTION
function RoverCard({
  roverName,
  roverImage,
  lastPhotoData,
  cameraCount,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}

export default RoverCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
