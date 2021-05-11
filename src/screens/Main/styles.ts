import { StyleSheet, Platform } from 'react-native'
import normalize from 'react-native-normalize'

import { WHITE } from 'utils/colors'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: WHITE    
  },
  content:{
    marginHorizontal: normalize(15),
    marginTop: Platform.OS === 'ios' ? normalize(20) : normalize(15)
  },
  title:{
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginBottom: normalize(15)
  }
})

export default styles