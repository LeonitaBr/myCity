import React from "react";
import { List, OrderItem } from "components";
import { useSelector } from "react-redux";

const OrderScreen = () => {

    const orders = useSelector(({ order }) => order.orders);

    return (
        <List
            data={orders}
            renderItem={({ item }) => (
                <OrderItem
                    items={item.items}
                    amount={item.totalAmount}
                    date={item.readableDate}
                />)
            } />
    )
}

export default OrderScreen