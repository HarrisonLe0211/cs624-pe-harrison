import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

const TabBar = ({ selected, onSelect }) => {
  const tabs = ['All', 'Active', 'Complete']

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const isActive = selected === tab
        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onSelect(tab)}
            style={[styles.tab, isActive && styles.tabActive]}
          >
            <Text style={[styles.text, isActive && styles.textActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center'
  },
  tabActive: {
    borderBottomWidth: 2,
    borderColor: '#4287f5'
  },
  text: {
    color: '#888',
    fontSize: 16
  },
  textActive: {
    color: '#4287f5',
    fontWeight: '600'
  }
})

export default TabBar
