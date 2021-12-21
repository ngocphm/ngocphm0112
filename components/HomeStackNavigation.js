import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductHome from '../Products/ProductHome';
import ProductList from './ListTopNavigation';
import ProductCard from '../Products/ProductCard';
import { AntDesign } from '@expo/vector-icons';
const HomeStackNavigation = () => {
    const bottomTab = createBottomTabNavigator();
    return (
        <bottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'List') {
                        iconName = 'bars';
                    } else if (route.name === 'Card') {
                        iconName = 'shoppingcart';
                    }

                    // You can return any component that you like here!
                    return <AntDesign name={iconName} size={size} color={color} />;
                },
                headerTintColor: 'black',
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <bottomTab.Screen name='Home' component={ProductHome} />
            <bottomTab.Screen name='List' component={ProductList} options={
                {
                    tabBarHideOnKeyboard: true
                }
            } />
            <bottomTab.Screen name='Card' component={ProductCard} />
        </bottomTab.Navigator>
    );
};

export default HomeStackNavigation
