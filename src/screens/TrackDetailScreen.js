import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.title}>{track.name}</Text>
      </View>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

TrackDetailScreen.navigationOptions = {
  title: 'Track Details',
};

const styles = StyleSheet.create({
  map: {
    height: 645,
  },
  title: {
    fontSize: 48,
    alignSelf: 'center',
  },
  view: {
    padding: 12,
    backgroundColor: '#D6D4DA',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
});

export default TrackDetailScreen;
