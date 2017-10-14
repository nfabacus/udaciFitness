import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { white, purple, gray } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={ [styles.reset, style] }>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: white,
    backgroundColor: purple,
    borderRadius: 5,
    marginTop: 5
    
  }
})
