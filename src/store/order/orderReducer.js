import Order from "../../models/Order";
import { ADD_ORDER } from "../actionTypes"

const initialState = {
    orders: [],

}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(action.payload.list, action.payload.totalAmount, new Date().toLocaleString())
            let newList =[...state.orders]
             newList = state.orders.concat(newOrder)
            return { orders: newList }
        default:
            return state
    }
}

export default orderReducer;