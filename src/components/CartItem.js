import React from 'react';
import { View, Pressable, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { fonts } from 'constants';

const Cart = ({ title, quantity, amount, deleteProduct, deletable }) => {

    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>{quantity}</Text>
                <Text style={styles.mainText}>{title}</Text> </Text>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>${amount.toFixed(2)}</Text>
                {deletable &&
                    <Pressable style={styles.deleteButton} onPress={deleteProduct}>
                        <Icon name="md-trash" size={23} color="red" />
                    </Pressable>}
            </View>
        </View>
    )
}

export default CartItem = React.memo(Cart);

const styles = StyleSheet.create({
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