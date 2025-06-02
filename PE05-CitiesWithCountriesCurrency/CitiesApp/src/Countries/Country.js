// src/Country/Country.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default class Country extends React.Component {
  render() {
    const { route, countries } = this.props;
    const { countryId } = route.params;

    // Find the selected country by ID
    const country = countries.find((c) => c.id === countryId);

    if (!country) {
      return (
        <View style={styles.container}>
          <Text style={styles.message}>Country not found.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{country.name}</Text>

        <Text style={[styles.label, { marginTop: 20 }]}>Currency:</Text>
        <Text style={styles.value}>{country.currency}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 20,
    marginTop: 4,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
