import 'react-native-gesture-handler'
import React from 'react'

import { Provider } from 'react-redux'
import store from './src/store'

import Navigator from './src/routes'

const App = () => (
  <Provider store={store}>  
    <Navigator />    
  </Provider>
)

export default App
