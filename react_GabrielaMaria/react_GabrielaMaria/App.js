import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './src/Principal';
import Menu from './src/Menu';


const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Principal" component={Principal} />
    <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>



  );
}



export default function App() {
return(
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>

)

}
