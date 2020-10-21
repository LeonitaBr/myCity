import React from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { List } from "components";
import Icon from 'react-native-vector-icons/Ionicons';
import { fonts, colors } from "constants";
import { removeFromCart } from "../../store/cart/cartAction";
import { addOrder } from "../../store/order/orderAction";

const CartScreen = () => {

    const cartList = useSelector(({ cart }) => cart.items);
    const totalAmount = useSelector(({ cart }) => cart.totalValue);

    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total:
                    <Text style={styles.totalAmount}>
                        ${totalAmount.toFixed(2)}
                    </Text>
                </Text>

                <Button title='Order Now' disabled={cartList.length === 0} onPress={() => dispatch(addOrder(cartList, totalAmount))} />

            </View>
            <List data={cartList} renderItem={({ item }) => {
                return (
                    <View style={styles.cartItem}>
                        <Text style={styles.itemData}>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <Text style={styles.mainText}>{item.productTitle}</Text> </Text>
                        <View style={styles.itemData}>
                            <Text style={styles.mainText}>${item.sum}</Text>
                            <Pressable style={styles.deleteButton} onPress={() => dispatch(removeFromCart(item))} >
                                <Icon name="md-trash" size={23} color="red" />
                            </Pressable>
                        </View>
                    </View>
                )
            }} />
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        margin: 20
    },

    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        borderRadius: 10,
        shadowRadius: 8,
        elevation: 5,

    },

    summaryText: {
        fontFamily: fonts.bold,
        fontSize: 18
    },

    totalAmount: {
        color: colors.accent
    },
    cartItem: {
        padding: 10,
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    quantity: {
        fontFamily: fonts.bold,
        color: '#888',
        fontSize: 16
    },
    mainText: {
        fontFamily: fonts.bold,
        fontSize: 16
    },

    deleteButton: {

    }
})