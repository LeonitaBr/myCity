import CartItem from "../../models/Cart";

const { ADD_TO_CART, DELETE_FROM_CART } = require("../actionTypes")

const initialState = {
    items: [],
    totalValue: 0,
    notFound: -1
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case ADD_TO_CART:

            const title = action.payload.name;
            const price = action.payload.price
            let addedProduct;
            const existedProduct = state.items.find(product => product.productTitle === title)
            let index = state.items.findIndex(product => product.productTitle === title)
            let updatedList = [...state.items];

            if (index !== state.notFound) {
                updatedList[index] = new CartItem(existedProduct.quantity + 1, price, title, existedProduct.sum + price)
                return {
                    ...state,
                    items: updatedList,
                    totalValue: state.totalValue + price
                }
            }
            else {
                addedProduct = new CartItem(1, price, title, price)
                return {
                    ...state,
                    items: state.items.concat(addedProduct),
                    totalValue: state.totalValue + price
                }
            }
        case DELETE_FROM_CART:
            let indexFound = state.items.findIndex(product => product.productTitle === action.payload.productTitle);
            let deletedList = [...state.items];
            if (action.payload.quantity > 1) {
                deletedList[indexFound] = new CartItem(
                    action.payload.quantity - 1, 
                    action.payload.productPrice,
                    action.payload.productTitle,
                    action.payload.sum - action.payload.productPrice);
                return {
                    ...state,
                    items: deletedList,
                    totalValue: state.totalValue - action.payload.productPrice,
                }
            }
            else {
                deletedList = state.items.filter(item => {item.productTitle===action.payload.productTitle} )
                return {
                    ...state,
                    items:deletedList,
                    totalValue: state.totalValue - action.payload.productPrice
                }
            }

        default:
            return state
    }
}

export default cartReducer;