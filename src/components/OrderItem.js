import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import {fonts, colors} from "constants";
import CartItem from './CartItem';

const OrderItem = ({ amount, date, items }) => {
    const [showDetails, setShowDetails] = useState(false);

    const showDetailsHandler = () => {
        setShowDetails(!showDetails)
    }
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>{amount.toFixed(2)}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Button color={colors.primary} title={showDetails ? 'Hide Details' : 'Show Details'} onPress={showDetailsHandler} />
             {showDetails &&
                <View style={styles.itemDetails}>
                    {items.map(item => (
                        <CartItem
                            key={item.productTitle}
                            title={item.productTitle}
                            quantity={item.quantity}
                            amount={item.sum}
                        />))}
                </View>}
  
        </View>
    )
}

export { OrderItem};

const styles = StyleSheet.create({
    orderItem: {
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        borderRadius: 10,
        shadowRadius: 8,
        elevation: 5,
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    totalAmount: {
        fontFamily: fonts.bold,
        fontSize: 16
    },
    date: {
        color: '#888',
        fontSize: 16
    },
    itemDetails: {
        width: '100%'
    }

})