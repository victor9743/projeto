import React, { useState } from 'react'
import {style} from 'react-native'
import { Button, Container, ImgLogo, Input, Title } from '../components'
import useAuth from '../hooks/auth'

function Login() {
  const [form, setForm] = useState({ login: '', senha: '' })
  const { doLogin, registro } = useAuth()
  return (
    <Container centerScreen>
      <ImgLogo />
      <Title text='Acesse sua conta' />
      <Input
        label='Login'
        placeholder='login'
        onChangeText={(text) => setForm({ ...form, login: text, })}
        autoCapitalize='none'
      />
      <Input
        placeholder='Senha'
        secureTextEntry
        onChangeText={(text) => setForm({ ...form, senha: text })}
        autoCapitalize='none'
      />
      <Button
        text='Entrar'
        onPress={() => doLogin(form)}
      />
      <Button text='Registre-se' onPress={registro}/>
    </Container>
  )
}

export default Login