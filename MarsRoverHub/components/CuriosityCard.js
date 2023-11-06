import {Pressable, StyleSheet, View, Text, Image} from 'react-native';

// MAIN FUNCTION
function CuriosityCard({
  roverName,
  lastPhotoData,
  cameraCount,
  onPress,
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        style={{
          resizeMode: 'contain',
          height: 250,
        }}
        source={require('../images/rovers/curiosity_hq.jpg')}
      />
        <Text>Name: {roverName}</Text>

        <Text>Last date: {lastPhotoData}</Text>
        <Text>Camera Count: {cameraCount}</Text>
    </Pressable>
  );
}

export default CuriosityCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
