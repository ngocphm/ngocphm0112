import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProductFace from '../Products/ProductFace';
import ProductSkirt from '../Products/ProductClothings';
import ProductShoes from '../Products/ProductShoes';
import ProductBra from '../Products/ProductBra';
const Top = createMaterialTopTabNavigator();
const ProductList = ({ }) => {


    return (
        <View style={{ flex: 1, marginTop: 30 }}>
            <Top.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarItemStyle: { width: 110 },
                    tabBarStyle: { backgroundColor: 'powderblue' },
                }}
            >
                <Top.Screen name='Clothes' component={ProductSkirt} />
                <Top.Screen name='Bra' component={ProductBra} />
                <Top.Screen name='Shoes' component={ProductShoes} />
                <Top.Screen name='SkinFace' component={ProductFace} />
            </Top.Navigator>
        </View>
    )
}

export default ProductList
