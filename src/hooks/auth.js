import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import useDatabase from '../database'

function useAuth() {
  const navigation = useNavigation()
  const {findByUser } = useDatabase()


  function doLogin({ login, senha }) {
    findByUser(login).then(function({ _array }){
      if (login === _array[0].usuario && senha === _array[0].senha) navigation.navigate('Home')
      else Alert.alert('Atenção', 'Usuário ou senha inválida.')
    })
  }

  function doLogout() {
    Alert.alert('Atenção...', 'Deseja realmente sair?',
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            Alert.alert('Aviso...', 'Logout realizado com sucesso.')
            navigation.navigate('Login')
          }
        }
      ],
    )
  }

  function registro(){
    navigation.navigate('Registro')
  }

  return {
    doLogin,
    doLogout,
    registro,
  }
}

export default useAuth