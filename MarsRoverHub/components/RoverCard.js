import {Pressable, StyleSheet, View, Text, Image} from 'react-native';

function RoverCard({
  localImage,
  activeStatus,
  roverName,
  lastPhotoData,
  cameraCount,
  onPress,
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.backgroundImage} source={localImage} />

      {/* Text Overlay */}
      <View style={styles.overlayContainer}>
        <View style={styles.statusAndNameContainer}>
          <Image style={styles.activeStatus} source={activeStatus} />

          <Text style={styles.roverName}>{roverName}</Text>
        </View>

        <View style={styles.photoAndCamContainer}>
          <Text style={styles.photoAndCamText}>
            Last Photo: {lastPhotoData}
          </Text>
          <Text style={styles.photoAndCamText}>{cameraCount} Cams</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default RoverCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  backgroundImage: {
    resizeMode: 'contain',
    height: 250,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'flex-end'
  },
  activeStatus: {
    alignSelf: 'center',
    marginRight: 5,
  },
  roverName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusAndNameContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  photoAndCamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 20,
    fontWeight: '400',
  },
  photoAndCamText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'flex-end'
  },
});
