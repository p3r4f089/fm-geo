import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import SplashScreen from 'screens/Splash/Splash'

import AppStack from './AppStack'

const Stack = createStackNavigator()


const Navigator = () => { 

  const [loading, setLoading] = useState(true)

  useEffect(() => {

  }, [])

  return(
    <SafeAreaProvider>
      <NavigationContainer>
        {loading ? (
          <Stack.Navigator headerMode="none">
            <Stack.Screen 
              name="Splash"
              component={SplashScreen}
              options={{
                animationEnabled: false
              }}
            />
          </Stack.Navigator>
        ) : (
          <>
            <AppStack />
          </>
        )
        }
      </NavigationContainer>
    </SafeAreaProvider>
  )

}

export default Navigator