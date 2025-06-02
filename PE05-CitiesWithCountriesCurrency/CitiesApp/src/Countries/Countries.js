// src/Countries/Countries.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
  };

  render() {
    const { countries } = this.props;

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {/* If no countries, show centering message */}
          {!countries.length && <CenterMessage message="No saved countries!" />}

          {countries.map((item, index) => (
            <View key={index} style={styles.countryContainer}>
              <Text style={styles.countryName}>{item.name}</Text>
              <Text style={styles.currency}>{item.currency}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  countryName: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 4,
  },
});
