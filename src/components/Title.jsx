import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'

function Title({ text }) {
  return (
    <Text style={[styles.title]} >
      {text}
    </Text>
  )
}

export default Title