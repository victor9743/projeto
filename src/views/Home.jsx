import axios from 'axios'
import React,  { useState } from 'react'
import { Button, Text } from 'react-native'
import { Container } from '../components'
import useAuth from '../hooks/auth'
import { Card, TextInput } from 'react-native-paper'
import {style} from 'react-native'
import { width } from '../styles'

function Home() {
  const [endereco, setEndereco] = useState({})
  const [cep, setCEP] = useState('')
  const { doLogout } = useAuth()
  function buscaCEP() {
    axios
      .get(`https://cep.awesomeapi.com.br/json/${cep}`)
      .then(function ({ data, status }) {
        if (status === 200) setEndereco(data)
        else setEndereco({})
      })
      .catch(function (err) {
        setEndereco({})
      })
  }

  return (
    <Container>
       <Card>
        <Card.Title title='Informe o CEP' subtitle='Busque o endereço pelo CEP' />
        <Card.Content>
          <TextInput
            placeholder='60000-000'
            label='CEP'
            onChangeText={function (text) {
              setCEP(text)
            }}
          />
          <Card style={{ marginTop: 32 }}>
            <Card.Content>
              <Text>{endereco.address}</Text>
              <Text>{endereco.city} - {endereco.state} - {endereco.district}</Text>
            </Card.Content>
          </Card>
        </Card.Content>
        <Card.Actions style={{ justifyContent: 'flex-end', marginTop: 10, marginRight: 10, marginBottom: 265}}>
          <Button mode='contained' onPress={buscaCEP} title="pesquisar" style={{backgroundColor: '#318BA5'}}/>
        </Card.Actions>
      </Card>
      
      <Button backgroundColor='#318BA5' title='Sair' onPress={doLogout} />
      
    </Container>
  )
}

export default Home