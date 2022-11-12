import { Image } from 'react-native'
import Logo from '../assets/logo.png'
import styles from '../styles'

function ImgLogo() {
  return (
    <Image style={[styles.logo]} source={Logo} />
  )
}

export { ImgLogo }
