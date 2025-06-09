import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

export default class AddCountry extends React.Component {
  state = {
    name: '',
    currency: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    const { name, currency } = this.state;
    if (name.trim() === '' || currency.trim() === '') {
      alert('Please complete both fields.');
      return;
    }

    const newCountry = {
      id: uuid.v4(),
      name: name.trim(),
      currency: currency.trim(),
    };

    this.props.addCountry(newCountry);

    this.setState({ name: '', currency: '' }, () => {
      this.props.navigation.navigate('Countries');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add Country</Text>

        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('name', val)}
          style={styles.input}
          value={this.state.name}
        />

        <TextInput
          placeholder="Currency"
          onChangeText={(val) => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />

        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
