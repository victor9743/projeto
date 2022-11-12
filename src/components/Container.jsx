import React from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from '../styles'

function Container(props) {
  return (
    <View style={[styles.container]}>
      <SafeAreaView style={[props.centerScreen ? styles.centerScreen : { flex: 1, width: '100%' }]} >
        {props.children}
      </SafeAreaView >
    </View>
  )
}


export default Container
