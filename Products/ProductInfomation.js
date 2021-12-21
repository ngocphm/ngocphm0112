import React from 'react'
import {
    View, Text, StyleSheet
    , Image, TouchableOpacity, SafeAreaView
    , Dimensions, Alert
} from 'react-native'
const { width, height } = Dimensions.get('window')
const ProductInfomation = ({ route, navigation }) => {
    const { item } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImage}>
                <Image
                    style={styles.img}
                    source={{ uri: item.avatar }}
                />
            </View>
            <View style={styles.viewname}>
                <Text style={styles.text}>
                    Name: {item.name}
                </Text>
                <Text style={styles.texttitle}>
                    Details: {item.details}
                </Text>
                <Text style={styles.textprice}>
                    Price: £ {item.price}
                </Text>
                <Text style={styles.textquantity}>
                    Quantity: {item.quantity}
                </Text>
                <Text style={styles.textsize}>
                    Size: {item.size}
                </Text>
                <Text style={styles.textcolor}>
                    Color: {item.color}
                </Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => Alert.alert('Thông báo', 'Bạn có chắc chắn muốn mua không', [
                    {
                        text: 'Xác Nhận', onPress: () => Alert.alert('Thông báo', 'Đơn hàng của bạn đã được chuyển vào giỏ hàng xin cảm ơn <3', [
                            { text: 'OK', onPress: () => { navigation.navigate('Card') } }
                        ])
                    },

                    { text: 'Huỷ', onPress: () => alert('Cảm ơn bạn đã đến với shop mong lần sau bạn sẽ mua chứ không xem chùa :)') }
                ])}>
                <Text>
                    BUY NOW --{'>'}
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ProductInfomation
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewImage: {
        flex: 3,
    },
    img: {
        width: width,
        height: height,
        resizeMode: 'cover'
    },
    viewname: {
        flex: 4,
        padding: 15,
        backgroundColor: 'rgba(225,225,225,0.6)',
        borderRadius: 30
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    texttitle: {
        fontSize: 20,
        paddingLeft: 25
    },
    textprice: {
        color: 'red',
        fontSize: 20,
        paddingLeft: 35
    },
    textquantity: {
        fontSize: 20,
        paddingLeft: 45
    },
    textsize: {
        fontSize: 20,
        paddingLeft: 55
    },
    textcolor: {
        fontSize: 20,
        paddingLeft: 65
    },
    button: {
        marginBottom: 30,
        marginHorizontal: 10,
        borderRadius: 15,
        backgroundColor: 'rgba(127,255,212,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 20
    }
})
