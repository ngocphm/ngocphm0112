import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import LoginProduct from './screens/LoginProduct';
import HomeStackNavigation from './components/HomeStackNavigation';
import ProductInfomation from './Products/ProductInfomation';
import Clothing from './Products/Infoclothing'
import Bra from './Products/InfoBra';
import Shoes from './Products/InfoShoes';
import Face from './Products/InfoFace';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ header: () => null }} />
        <Stack.Screen name='LoginProduct' component={LoginProduct} options={{ header: () => null }} />
        <Stack.Screen name='HomeStackNavigation' component={HomeStackNavigation} options={{ header: () => null }} />
        <Stack.Screen name='ProductInfomation' component={ProductInfomation} options={{ header: () => null }} />
        <Stack.Screen name='Clothing' component={Clothing} options={{ header: () => null }} />
        <Stack.Screen name='Productbar' component={Bra} options={{ header: () => null }} />
        <Stack.Screen name='ProductShoes' component={Shoes} options={{ header: () => null }} />
        <Stack.Screen name='ProductFace' component={Face} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
