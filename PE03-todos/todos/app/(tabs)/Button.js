import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

const Button = ({ submitTodo }) => (
  <View style={styles.buttonWrapper}>
    <TouchableOpacity
      style={styles.submitButton}
      onPress={submitTodo}
    >
      <Text style={styles.submitButtonText}>
        Submit
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  submitButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 3,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Android elevation
    elevation: 2
  },
  submitButtonText: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.8)',
    textTransform: 'capitalize'
  }
})

export default Button
