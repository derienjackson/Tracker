import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          style={styles.input}
          placeholder="Enter Track Name"
        />
      </Spacer>
      {!recording && !locations.length ? (
        <Text style={styles.instructions}>Press button to begin recording</Text>
      ) : null}
      <Spacer>
        {recording ? (
          <Button
            style={styles.buttons}
            icon={<Icon name="stop" size={70} color="black" />}
            // title="Stop"
            type="clear"
            onPress={stopRecording}
          />
        ) : (
          <Button
            style={styles.buttons}
            icon={<Icon name="record-rec" size={70} color="black" />}
            type="clear"
            // title="Start Recording"
            onPress={startRecording}
          />
        )}
      </Spacer>
      {!recording && locations.length ? (
        <Button
          style={styles.buttons}
          title={'Save Recording'}
          type="outline"
          onPress={saveTrack}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 30,
  },
  buttons: {
    alignItems: 'center',
    width: '100%',
  },
  instructions: {
    alignSelf: 'center',
    opacity: 0.5,
  },
});

export default TrackForm;
