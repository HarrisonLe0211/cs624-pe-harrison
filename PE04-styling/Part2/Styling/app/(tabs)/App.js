import React, { Component } from 'react';
// PropTypes lets you specify what properties the ProfileCard component can accept.
import PropTypes from 'prop-types'; 

// The immutability helper function update lets you update a specific piece of the component’s state.
// npm install immutability-helper --save
import update from 'immutability-helper'; 

/*
  Imports the Platform utility component to programmatically select styles based on the platform.
*/
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'; 

const userImage = require('../../assets/images/user.png');

const data = Array.from({ length: 6 }, () => ({
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description:
    'John is a really great Javascript developer. ' +
    'He loves using JS to build React Native applications ' +
    'for iOS and Android',
  showThumbnail: true,
}));

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}> 
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    const list = this.state.data.map(function(item, index) { 
      const { image, name, occupation, description, showThumbnail } = item;
      return <ProfileCard key={'card-' + index}
                   image={image}
                   name={name}
                   occupation={occupation}
                   description={description}
                   onPress={this.handleProfileCardPress.bind(this, index)}
                   showThumbnail={showThumbnail}/>
    }, this);

    return (
      <View style={styles.container}>
        {list} 
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 150,
        height: 200,
        margin: 5,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {height: 8, width: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 12
            },
            shadowOpacity: 0.35,
            shadowRadius: 10
          },
          android: {
            elevation: 20,
          }
        })
    },
    /*
      Adds a drop shadow to the circular image container
    */
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: 'black',
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 15,
        paddingTop: 7,
        overflow: 'visible',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {height: 7, width: 0},
        shadowOpacity: 1,
        shadowRadius: 5,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 12
            },
            shadowOpacity: 0.35,
            shadowRadius: 10
          },
          android: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 20,
          }
        })
    },
    cardImage: {
        width: 40,
        height: 40
    },

    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.96)',
        textShadowOffset: {
            height: 4,
            width: 1
        },
        textShadowRadius: 8 
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 1.5,
        borderBottomLength: 5,
    },
    cardOccupation: {
        fontWeight: 'bold',
        fontSize: 9, 
        marginTop: 5,
        marginBottom: 5,
    },
    cardDescription: {
        fontStyle: 'italic',
        fontSize: 7, 
        marginTop: 5,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 0
    },
    /*
        The cardThumbnail style reduces the component’s size by 50%.
    */
        cardThumbnail: {
          transform: [{scale: 0.5}]
      },
});
