import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnBoarding from './authencation/OnBoarding';
import Home from './src/Home';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';



function App(){
  const Stack= createNativeStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}>
        
      <Stack.Screen name="OnBoarding" component={OnBoarding}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;