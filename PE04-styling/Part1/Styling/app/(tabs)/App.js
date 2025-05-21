import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const AVATAR_SIZE = 120;
const ICON_SIZE   = 80;

function ProfileImage() {
  return (
    <View style={styles.cardImageContainer}>
      <Image
        style={styles.cardImage}
        source={require('../../assets/images/user.png')}
      />
    </View>
  );
}

function ProfileName({ children }) {
  return <Text style={styles.name}>{children}</Text>;
}

function ProfileTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

function ProfileDescription({ children }) {
  return <Text style={styles.description}>{children}</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ProfileImage/>

        <ProfileName>John Doe</ProfileName>
        <ProfileTitle>React Native Developer</ProfileTitle>

        <ProfileDescription>
          John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.
        </ProfileDescription>
      </View>
    </View>
  );
}

const profileCardColor = '#4B94DA';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },

  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },

  cardImage: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 5,
    fontSize: 16,
  },

  description: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
