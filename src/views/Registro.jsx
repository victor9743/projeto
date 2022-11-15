import React,  { useState } from 'react'
import { Button, Container, ImgLogo, Input, Title } from '../components'
import usuario from '../hooks/usuario'

function Registro(){
    const [form, setForm] = useState({ login: '', senha: '', confirmSenha: '' })
    const {cadastrar} = usuario()
    return ( 
        <Container centerScreen>
        <Title text='Registre-se' />
        <Input
            label='Login'
            placeholder='login'
            onChangeText={(text) => setForm({ ...form, login: text })}
            autoCapitalize='none'
        />
        <Input
            label='Senha'
            placeholder='Senha'
            secureTextEntry
            onChangeText={(text) => setForm({ ...form, senha: text })}
            autoCapitalize='none'
        />
         <Input
            label='Confirmar Senha'
            placeholder='Confirmar Senha'
            secureTextEntry
            onChangeText={(text) => setForm({ ...form, confirmSenha: text })}
            autoCapitalize='none'
        />
        <Button
          text='Cadastrar'
          onPress={() => cadastrar(form)}
        />
      </Container>
    )
}

export default Registro;
