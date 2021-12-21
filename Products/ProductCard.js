import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window')
const ProductCard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewlogo}>
                <View style={styles.logo}>
                    <Image
                        source={(require('../assets/image/logo.png'))}
                        style={styles.logoimage} />
                    <Text style={styles.text}>
                        Giỏ Hàng
                    </Text>
                </View>
            </View>

            <View style={styles.vievboder2}>
                <View style={styles.contine}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { navigation.navigate('List') }}>
                        <Text style={styles.textbutton}>
                            Countinue Shopping --{'>'} Click here !
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.info} >

            </View>

        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewlogo: {
        flex: 2,
        backgroundColor: "#fff"
    },
    vievboder2: {
        backgroundColor: "#00FFCC",
        flex: 2
    },
    contine: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#fff",
        borderTopRightRadius: 150
    },
    logo: {
        flex: 1,
        backgroundColor: "#00FFCC",
        borderBottomLeftRadius: 150,
        flexDirection: 'row'
    },
    logoimage: {
        width: 150,
        height: 150,
        marginLeft: 55,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    textbutton: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    info: {
        flex: 7.5,
        backgroundColor: '#fff'
    },
    text: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    }

})

