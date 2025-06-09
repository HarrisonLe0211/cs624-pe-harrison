// src/Countries/Country.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import uuid from 'react-native-uuid';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Country extends React.Component {
  state = {
    currencyName: '',
    currencyInfo: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addCurrency = () => {
    const { currencyName, currencyInfo } = this.state;
    const { countries, route, addCurrency } = this.props;
    const country = countries.find(c => c.id === route.params.countryId);
    if (!currencyName.trim()) return;

    addCurrency(
      {
        id: uuid.v4(),
        name: currencyName.trim(),
        info: currencyInfo.trim(),
      },
      country
    );
    this.setState({ currencyName: '', currencyInfo: '' });
  };

  render() {
    const { countries, route } = this.props;
    const country = countries.find(c => c.id === route.params.countryId);
    const currencies = country?.currencies || [];

    if (!country) {
      return (
        <View style={styles.screen}>
          <Text style={styles.message}>Country not found.</Text>
        </View>
      );
    }

    return (
      <View style={styles.screen}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.currencyListContainer}
        >
          <Text style={styles.label}>Country Name:</Text>
          <Text style={styles.value}>{country.name}</Text>

          <Text style={[styles.label, { marginTop: 12 }]}>
            Default Currency:
          </Text>
          <Text style={styles.value}>{country.currency}</Text>

          {currencies.length === 0 ? (
            <CenterMessage message="No currencies added yet." />
          ) : (
            currencies.map(cur => (
              <View key={cur.id} style={styles.currencyItem}>
                <Text style={styles.currencyName}>{cur.name}</Text>
                {/* append "Not used." to every non-default currency's info */}
                <Text style={styles.currencyInfo}>
                  {cur.info} Not used.
                </Text>
              </View>
            ))
          )}
        </ScrollView>

        <TextInput
          placeholder="Currency name"
          placeholderTextColor="white"
          style={styles.input}
          value={this.state.currencyName}
          onChangeText={v => this.onChangeText('currencyName', v)}
        />
        <TextInput
          placeholder="Currency info"
          placeholderTextColor="white"
          style={[styles.input, styles.input2]}
          value={this.state.currencyInfo}
          onChangeText={v => this.onChangeText('currencyInfo', v)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addCurrency}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  currencyListContainer: {
    paddingBottom: 104,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginTop: 12,
    color: colors.primary,
  },
  value: {
    fontSize: 20,
    marginHorizontal: 12,
    marginTop: 4,
  },

  currencyItem: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginTop: 8,
  },
  currencyName: {
    fontSize: 20,
  },
  currencyInfo: {
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 4,
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

  message: {
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
