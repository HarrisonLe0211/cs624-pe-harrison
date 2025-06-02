// App.js
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// ---- City/Cities screens (unchanged) ----
import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';

// ---- Country folders (moved) ----
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import AddCountry from './src/AddCountry/AddCountry';

import { colors } from './src/theme';

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
        name="Cities"
        children={(props) => (
          <Cities
            {...props}
            cities={cities}
            addCity={addCity}
            addLocation={addLocation}
          />
        )}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
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
function CountriesStackScreen({ navigation, route, countries }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="CountriesList"
        children={(props) => <Countries {...props} countries={countries} />}
        options={{ title: 'Countries' }}
      />
      <Stack.Screen
        name="Country"
        children={(props) => <Country {...props} countries={countries} />}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  // ------ Existing City methods ------
  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, locations: [] }],
    }));
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const updatedCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location],
    };
    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({ cities });
  };

  // ------ New Country methods ------
  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, country],
    }));
  };

  render() {
    return (
      <NavigationContainer>
        {/** Default to Countries tab */}
        <Tab.Navigator
          initialRouteName="Countries"
          screenOptions={{ headerShown: false }}
        >
          {/* Cities Stack Navigator */}
          <Tab.Screen
            name="CitiesNav"
            options={{ title: 'Cities' }}
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />

          {/* AddCity */}
          <Tab.Screen
            name="AddCity"
            options={{ title: 'Add City' }}
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />

          {/* Countries Stack Navigator */}
          <Tab.Screen
            name="Countries"
            options={{ title: 'Countries' }}
            children={(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
              />
            )}
          />

          {/* AddCountry */}
          <Tab.Screen
            name="AddCountry"
            options={{ title: 'Add Country' }}
            children={(props) => (
              <AddCountry
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
