import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('LoginProduct')
    }, 5000);
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <LottieView source={require('../assets/lottie/template.json')} autoPlay loop/>
        </View>
    );
}

export default Splash
