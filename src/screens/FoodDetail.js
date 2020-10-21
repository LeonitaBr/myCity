import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, ScrollView, Text } from "react-native";
import { colors, fonts } from "constants";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/cartAction'

const FoodDetail = () => {

    const choosenFood = useSelector(({ choosenFood }) => choosenFood.selectedFood);

    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch()

    const increaseCounter = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    const decreaseCounter = () => {
        if (counter === 0)
            return;
        setCounter(prevCounter => prevCounter - 1)
    }

    const addToCartHandler = () => {
        dispatch(addToCart(choosenFood))
    }


    return (
        <ScrollView style={styles.mainContainer}>
            <Image style={styles.mainImage} source={{ uri: choosenFood.uri }} />
            <View style={styles.contentContainer}>
                <Text style={styles.foodTitle}>{choosenFood.name}</Text>
                <Image style={styles.stars} />
                <Text style={styles.description}>{choosenFood.description}</Text>
                <View style={styles.priceDetails}>
                    <Text style={styles.price}>${choosenFood.price}</Text>
                    <View style={styles.orderContainer}>
                        <Pressable onPress={decreaseCounter} style={styles.button}>
                            <Text style={styles.text}>-</Text>
                        </Pressable>
                        <Text style={[styles.button, styles.text]}>{counter}</Text>
                        <Pressable onPress={increaseCounter} style={styles.button}><Text style={styles.text}>+</Text></Pressable>
                    </View>

                </View>
                <Pressable onPress={addToCartHandler} style={styles.orderButton}><Text style={styles.orderText}>Add to  Cart</Text></Pressable>
            </View>
        </ScrollView>
    )
}

export default FoodDetail;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    mainImage: {
        width: '100%',
        height: 225,
    },
    contentContainer: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: 'white',
        alignItems: "center",
        top: -30,
        flex: 1,
        paddingVertical: 30,
    },
    foodType: {
        fontFamily: fonts.medium,
        paddingVertical: 10,
        color: '#605b5a',
        fontSize: 18,
    },
    foodTitle: {
        fontFamily: fonts.bold,
        fontSize: 22,
    },
    stars: {

    },
    description: {
        fontFamily: fonts.think,
        paddingHorizontal: 30,
        textAlign: 'center',
        lineHeight: 26,
        color: 'black',
        fontSize: 17
    },
    price: {
        fontFamily: fonts.black,
        paddingBottom: 15,
        fontSize: 22
    },
    orderContainer: {
        justifyContent: 'space-between',
        borderColor: '#605b5a',
        flexDirection: 'row',
        paddingVertical: 5,
        overflow: 'hidden',
        borderRadius: 20,
        borderWidth: 1,
        width: '40%',
    },
    priceDetails: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
    orderButton: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 20,
        width: '80%'
    },
    orderText: {
        color: 'white',
        fontSize: 18
    }
})
