import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes"

export const addToCart = (payload) => {
    return { type: ADD_TO_CART, payload: payload }
}

export const removeFromCart = (payload) =>{
    return { type: DELETE_FROM_CART, payload: payload }

}