import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class City extends React.Component {
  state = {
    name: '',
    info: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addLocation = () => {
    const { name, info } = this.state;
    if (!name.trim() || !info.trim()) return;

    // use the up-to-date addLocation from props
    const { addLocation } = this.props;
    // still pull the selected city out of the route
    const { city } = this.props.route.params;

    addLocation(
      { name: name.trim(), info: info.trim() },
      city
    );

    this.setState({ name: '', info: '' });
  };

  render() {
    // grab the current cities array (from App.state) and the base city object
    const { cities } = this.props;
    const { city } = this.props.route.params;

    // look up the fresh one by ID
    const updatedCity =
      cities.find(item => item.id === city.id) || city;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={[
            !updatedCity.locations.length && { flex: 1 },
          ]}
        >
          <View
            style={[
              styles.locationsContainer,
              !updatedCity.locations.length && {
                flex: 1,
                justifyContent: 'center',
              },
            ]}
          >
            {!updatedCity.locations.length && (
              <CenterMessage message="No locations for this city!" />
            )}
            {updatedCity.locations.map((location, idx) => (
              <View key={idx} style={styles.locationContainer}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationInfo}>{location.info}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <TextInput
          placeholder="Location name"
          placeholderTextColor="white"
          style={styles.input}
          value={this.state.name}
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          placeholder="Location info"
          placeholderTextColor="white"
          style={[styles.input, styles.input2]}
          value={this.state.info}
          onChangeText={val => this.onChangeText('info', val)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationsContainer: {
    paddingBottom: 104,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  locationName: {
    fontSize: 20,
  },
  locationInfo: {
    color: 'rgba(0, 0, 0, .5)',
  },
});
