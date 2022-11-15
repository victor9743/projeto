import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/views/Home'
import Login from './src/views/Login'
import Registro from './src/views/Registro'
import useDatabase from './src/database'

const Stack = createNativeStackNavigator()
const {initDb} = useDatabase()
initDb()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#3570A5'}
      }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App