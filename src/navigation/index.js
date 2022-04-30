import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './navigationService';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/profile';
import AddCryptoScreen from '../screens/addCrypto';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{animationEnabled: false, headerShown: false}}>
        <RootStack.Screen name={'Profile'} component={ProfileScreen} />
        <RootStack.Screen name={'AddCurrency'} component={AddCryptoScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
