import { ADD_ORDER } from "../actionTypes"

export const addOrder = (cartList, totalAmount) => {
    return { type: ADD_ORDER, payload: { list: cartList, totalAmount: totalAmount } }
}
