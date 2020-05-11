import React, {Component} from 'react';
import Login from './pages/login';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './pages/signup';
import Homes from './pages/home';

class App extends Component {
  render() {
      
  }
}

const Stack = createStackNavigator();

function Screen() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Homes" component={Homes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;
