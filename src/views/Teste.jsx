import React, { useState } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'

function Teste(props) {
  const [numero, setNumero] = useState(10)

  return (
    <View>
      <SafeAreaView>
        <Text style={{ alignSelf: 'center', fontSize: 24 }}>{numero}</Text>
        <Button title='Incremento (+)' onPress={function () {
          setNumero(numero + 1)
        }} />
        <Button title='Decremento (-)' onPress={function () {
          setNumero(numero - 1)
        }} />
      </SafeAreaView>
    </View>
  )
}

export default Teste