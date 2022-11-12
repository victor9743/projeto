import React from 'react'
import { Text, TextInput } from 'react-native'
import styles from '../styles'

function Input(props) {
  return (
    <React.Fragment>
      {props.label && <Text style={[styles.text]}>{props.label}</Text>}
      <TextInput
        style={[styles.input]}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(225,255,255,0.4)"
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        {...props}
      />
    </React.Fragment>
  )
}

export default Input