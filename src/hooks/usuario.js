import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import useDatabase from '../database'

function usuario(){
    const navigation = useNavigation()
    const {insert, findByUser } = useDatabase()

    function cadastrar({login, senha, confirmSenha}){

        if (login != "" && senha != "" && confirmSenha != "") {
            if (senha == confirmSenha) {
                findByUser(login).then(function({ _array }){
                    if (_array.length == 0) {
                        insert([login, senha])
                        navigation.navigate('Login')
                        Alert.alert('Atenção', 'Usuário cadastrado com sucesso !!!')
                    } else {
                        Alert.alert('Atenção', 'Já existe um usuário com este nome cadastrado')
                    }
                })
            } else {
                Alert.alert('Atenção', 'Senhas não são iguais')
            }
        } else {
            Alert.alert('Atenção', 'Existem campos a serem preenchidos')
        }
    }

    return {
        cadastrar
    }
}

export default usuario