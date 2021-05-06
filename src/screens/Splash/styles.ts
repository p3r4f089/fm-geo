import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

import { WHITE } from 'utils/colors'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },  
  logo:{
    width: normalize(200),
    height: normalize(100),
    resizeMode: 'contain'
  }  
})

export default styles