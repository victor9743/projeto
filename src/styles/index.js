import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
  },
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 8,
    width: width - 32
  },
  input: {
    width: width - 32,
    height: 56,
    backgroundColor: '#121214',
    borderRadius: 6,
    marginVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff'
  },
  logo: {
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#00875F',
    height: 56,
    width: width - 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
})

export default styles
export { width, height }
