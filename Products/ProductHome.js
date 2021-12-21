import React, { useState, useEffect } from 'react'
import {
    SafeAreaView, StyleSheet, Text, View,
    Image, FlatList, Dimensions, TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const ProductHome = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [datalist, setDataList] = useState([]);
    const [dataproduct, setDataProduct] = useState([]);
    useEffect(() => {
        const ApiUrl = 'https://6161aa3b37492500176313e4.mockapi.io/apiproduct/swaper';
        fetch(ApiUrl).then(res => res.json())
            .then(resJson => { setData(resJson) })
            .catch(error => { 'lỗi không có dữ liệu' })
    }, [])
    useEffect(() => {
        const urllist = 'https://6161aa3b37492500176313e4.mockapi.io/apiproduct/Apilist';
        fetch(urllist).then(reslist => reslist.json())
            .then(repoonselist => { setDataList(repoonselist) })
            .catch(error => { 'lỗi không có dữ liệu' })
    }, [])
    const renderItem = ({ item, index }) => {
        return (<View style={{ backgroundColor: '#fff' }}>
            <View
                style={styles.viewlistflas}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.imglsit}
                    resizeMode="cover"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')} >
                    <Text
                        style={styles.titlelist}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
                <Text
                    style={styles.textlist}>
                    {item.title}
                </Text>
            </View>
        </View>
        );
    };
    useEffect(() => {
        const urlproduct = 'https://6161aa3b37492500176313e4.mockapi.io/apiproduct/ListProduct';
        fetch(urlproduct)
            .then(reps => reps.json())
            .then(reponproduct => { setDataProduct(reponproduct) })
            .catch(error => ' lỗi không có dữ liệu')
    }, [])
    const renderItemProduct = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View
                    style={styles.viewpro}>
                    <View
                        style={styles.viewlispro}>
                        <View
                            style={styles.vievicon}>
                            <AntDesign name="hearto" size={18} />
                        </View>
                    </View>
                    <Image
                        source={{ uri: item.avatar }}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("ProductInfomation", { item })
                        }}
                    >
                        <Text
                            style={styles.textpro}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.textprice}>
                        <Text>£ </Text>
                        {item.price}

                    </Text>
                </View>
            </View>
        );
    };
    if (data && data.length) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.Viewcontainer}>
                    <Swiper autoplay loop >
                        <Image source={{ uri: data[0].imageswaper }} style={styles.imageswaper} />
                        <Image source={{ uri: data[1].imageswaper }} style={styles.imageswaper} />
                        <Image source={{ uri: data[2].imageswaper }} style={styles.imageswaper} />
                        <Image source={{ uri: data[3].imageswaper }} style={styles.imageswaper} />
                        <Image source={{ uri: data[4].imageswaper }} style={styles.imageswaper} />
                    </Swiper>
                </View>
                <View style={styles.vievlisst} >
                    <FlatList
                        data={datalist}
                        renderItem={renderItem}
                        keyExtractor={item => `key-${item.id}`}
                        numColumns={4}
                    />
                </View>
                <View style={styles.viewproduct}>
                    <FlatList
                        style={{ marginTop: 2 }}
                        data={dataproduct}
                        renderItem={renderItemProduct}
                        keyExtractor={item => `key-${item.id}`}
                        numColumns={2}
                    />
                </View>


            </SafeAreaView>
        );
    } else {
        return (<View style={styles.viewLottie}>
            <LottieView source={require('../assets/lottie/loading.json')}
                autoPlay loop /></View>)
    }
};

export default ProductHome

const styles = StyleSheet.create({
    imageswaper: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',

    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    Viewcontainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    vievlisst: {
        flex: 2
    },
    viewproduct: {
        flex: 2,
        marginTop: -50
    },
    viewLottie: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewlist: {
        width: width - 20,
        justifyContent: 'center'
    },
    viewlistflas: {
        width: width / 4 - 20,
        height: 192,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        shadowOpacity: 6,
        elevation: 8,
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
    imglsit: {
        height: 110,
        borderRadius: 10
    },
    titlelist: {
        fontSize: 14,
        color: '#000',
        fontWeight: '600',
        marginTop: 5,
        marginHorizontal: 5,
    },
    textlist: {
        fontSize: 14,
        color: '#FF99FF',
        fontWeight: '600',
        marginVertical: 5,
        marginHorizontal: 5,
    },
    viewpro: {
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
    viewlispro: {
        alignItems: 'flex-end',
        marginHorizontal: 5,
    },
    vievicon: {
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
    img: {
        height: 250,
        borderRadius: 10
    },
    textpro: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        marginTop: 5,
        marginHorizontal: 5,
        height: 32,
        marginLeft: 20
    },
    textprice: {
        fontSize: 14,
        color: '#FF99FF',
        fontWeight: '600',
        marginVertical: 5,
        marginHorizontal: 25,
    }
});


