import React from 'react'
import styles from './styles'

import { View, Image } from 'react-native'

import Logo from 'assets/images/logo.png'

const SplashScreen = () => (
  <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
  </View>
)

export default SplashScreen