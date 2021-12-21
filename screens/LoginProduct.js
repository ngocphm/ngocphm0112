import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginProduct = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/image/logo.png')}
                style={styles.logo}
            />
            <FormInput
                labelValue={email}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="SingIn"
               onPress={()=> navigation.navigate('HomeStackNavigation')}
            />
            <Text style={styles.text}>
                or
            </Text>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                    />

                    <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                    />
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.forgotButton}>
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here
                </Text>
            </TouchableOpacity>
        </ScrollView>
        
    );
};

export default LoginProduct;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 50,
        backgroundColor: '#ffffff',
    },
    logo: {
        height: 250,
        width: 250,
        resizeMode: 'cover',
    },
    text: {
        marginTop: 10,
        color: '#051d5f',
        fontSize: 15
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
});