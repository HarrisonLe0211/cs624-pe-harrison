// App.js
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import { colors } from './src/theme';

// City/Cities screens
import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';

// Country/Countries screens
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ---------------- Cities Stack ----------------
function CitiesStackScreen({ navigation, route, cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="CitiesList"
        children={props => <Cities {...props} cities={cities} />}
        options={{ title: 'Cities' }}
      />
      <Stack.Screen
        name="City"
        children={props => (
          <City
            {...props}
            cities={cities}
            addCity={addCity}
            addLocation={addLocation}
          />
        )}
      />
    </Stack.Navigator>
  );
}

// -------------- Countries Stack ----------------
function CountriesStackScreen({ navigation, route, countries, addCurrency }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="CountriesList"
        children={props => <Countries {...props} countries={countries} />}
        options={{ title: 'Countries' }}
      />
      <Stack.Screen
        name="Country"
        children={props => (
          <Country
            {...props}
            countries={countries}
            addCurrency={addCurrency}
          />
        )}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  // ------ City methods ------
  addCity = (city) => {
    this.setState(prev => ({
      cities: [...prev.cities, { ...city, locations: [] }],
    }));
  };

  addLocation = (location, city) => {
    const idx = this.state.cities.findIndex(c => c.id === city.id);
    if (idx < 0) return;
    const updated = {
      ...this.state.cities[idx],
      locations: [...this.state.cities[idx].locations, location],
    };
    this.setState({
      cities: [
        ...this.state.cities.slice(0, idx),
        updated,
        ...this.state.cities.slice(idx + 1),
      ],
    });
  };

  // ------ Country methods ------
  addCountry = (country) => {
    this.setState(prev => ({
      countries: [...prev.countries, { ...country, currencies: [] }],
    }));
  };

  addCurrency = (currency, country) => {
    const idx = this.state.countries.findIndex(c => c.id === country.id);
    if (idx < 0) return;
    const updated = {
      ...this.state.countries[idx],
      currencies: [...(this.state.countries[idx].currencies || []), currency],
    };
    this.setState({
      countries: [
        ...this.state.countries.slice(0, idx),
        updated,
        ...this.state.countries.slice(idx + 1),
      ],
    });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          {/* Cities */}
          <Tab.Screen
            name="CitiesNav"
            options={{ title: 'Cities' }}
            children={props => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />

          {/* Add City */}
          <Tab.Screen
            name="AddCity"
            options={{ title: 'Add City' }}
            children={props => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
              />
            )}
          />

          {/* Countries */}
          <Tab.Screen
            name="Countries"
            options={{ title: 'Countries' }}
            children={props => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
                addCurrency={this.addCurrency}
              />
            )}
          />

          {/* Add Country */}
          <Tab.Screen
            name="AddCountry"
            options={{ title: 'Add Country' }}
            children={props => (
              <AddCountry
                {...props}
                addCountry={this.addCountry}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
