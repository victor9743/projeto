import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

function useAuth() {
  const navigation = useNavigation()

  function doLogin({ login, senha }) {
    if (login === 'admin' && senha === 'admin') navigation.navigate('Home')
    else Alert.alert('Atenção...', 'Usuário não localizado ou senha inválida.')
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