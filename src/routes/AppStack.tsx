import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from 'screens/Main/Main'

const Stack = createStackNavigator()

const AppStack = () => (

    <Stack.Navigator    
      initialRouteName="Splash"  
      screenOptions={{        
        headerTitleAlign: 'center',
        headerTransparent: false,                
      }}> 
      
      <Stack.Screen 
        name="Main" 
        component={MainScreen} 
        options={{
          animationEnabled: false,
          headerShown: false,
          gestureEnabled: false,
        }}                                            
      />  
    </Stack.Navigator>
)

export default AppStack