import { StyleSheet, Platform } from 'react-native'

import normalize from 'react-native-normalize'

import { GRAY, OPACITY } from 'utils/colors'

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    borderColor: OPACITY,
    borderWidth: Platform.OS === 'ios' ? normalize(0.7) : normalize(3.4) ,    
    borderRadius: Platform.OS === 'ios' ? normalize(5): normalize(8),
    marginBottom: normalize(20)
  },
  input:{    
    flex: 1,
    paddingHorizontal: normalize(12),               
    fontSize: normalize(14),
    color: GRAY,
    paddingVertical: Platform.OS === 'ios' ? normalize(8) : normalize(3),  
  },    
  iconContainer:{   
    justifyContent: 'center',
    padding: normalize(6),
    marginEnd: normalize(5)
  },
  icon:{
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain'
  }
})

export default styles