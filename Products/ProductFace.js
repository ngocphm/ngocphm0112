import React, { useState, useEffect } from 'react'
import {
    View, Text, TextInput, Dimensions,
    FlatList, StyleSheet,
    TouchableOpacity, Image
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const ProductFace = ({ navigation }) => {
    const [dataclothing, setDataClothing] = useState([]);
    useEffect(() => {
        const urlClothing = 'https://huynhpt.github.io/Facebody.json';
        fetch(urlClothing).then(resclo => resclo.json())
            .then(responclo => { setDataClothing(responclo) })
            .catch(error => ' lỗi không có dữ liệu')
    }, [])
    const renderItemClo = ({ item }) => {
        return (
            <View>
                <View
                    style={styles.viewBra}>
                    <View
                        style={styles.viewlisBra}>
                        <View
                            style={styles.vieviconbra}>
                            <Ionicons name="heart-outline" size={24} />
                        </View>
                    </View>
                    <Image
                        source={{ uri: item.avatar }}
                        style={styles.imgbra}
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ProductFace', { item })
                        }}
                    >
                        <Text
                            style={styles.textbra}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.textpricebra}>
                        <Text>£ </Text>
                        {item.price}

                    </Text>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewSearch}>
                <TextInput
                    placeholder={'Tìm Kiếm'}
                    style={styles.textsearch}
                />
                <TouchableOpacity>
                    <Ionicons name="search-circle-outline" size={45} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.viewFlas}>
                <FlatList
                    data={dataclothing}
                    renderItem={renderItemClo}
                    keyExtractor={item => `key-${item.id}`}
                    numColumns={2}
                />
            </View>
        </View>
    );
}

export default ProductFace
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    viewSearch: {
        flex: 2,
        flexDirection: 'row'
    },
    textsearch: {
        width: width - 100,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 10
    },
    viewFlas: {
        flex: 25,

    },
    viewBra: {
        width: width / 2 - 20,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        shadowOpacity: 6,
        elevation: 8,
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
    viewlisBra: {
        alignItems: 'flex-end',
        marginHorizontal: 5,
    },
    vieviconbra: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30 / 2,
        position: 'absolute',
        zIndex: 1,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    imgbra: {
        height: 250,
        borderRadius: 10
    },
    textbra: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        marginTop: 5,
        marginHorizontal: 5,
        height: 32,
        marginLeft: 20
    },
    textpricebra: {
        fontSize: 15,
        color: '#FF99FF',
        fontWeight: '600',
        marginVertical: 5,
        marginHorizontal: 20,
    }
})
