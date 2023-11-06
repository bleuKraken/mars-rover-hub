import {Pressable, StyleSheet, View, Text, Image} from 'react-native';

// MAIN FUNCTION
function PerseveranceCard({
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
        source={require('../images/rovers/perseverance_hq.jpg')}
      />
        <Text>Name: {roverName}</Text>

        <Text>Last date: {lastPhotoData}</Text>
        <Text>Camera Count: {cameraCount}</Text>
    </Pressable>
  );
}

export default PerseveranceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
