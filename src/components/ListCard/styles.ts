import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

import { WHITE, GRAY_0, OPACITY_0 } from 'utils/colors'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: 100,
    marginVertical: normalize(10),    
    backgroundColor: 'red'
  },
  card:{
    width: 100,
    padding: normalize(10),
    backgroundColor: WHITE,    
    borderColor: GRAY_0,
    borderWidth: 1,    
    borderRadius: normalize(8),
    shadowColor: OPACITY_0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.41,
    elevation: 2,
  },
  name:{
    fontSize: normalize(18)
  }
})

export default styles