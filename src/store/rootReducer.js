import placesReducer from "./places/placesReducer";
import { combineReducers } from  'redux';
import authReducer from "./auth/authReducer";
import  selectedRestorant  from "./selectedRestorant/selectedRestorantReducer";
import cartReducer from "./cart/cartReducer";
import orderReducer from "./order/orderReducer";
import restaurantsReducer from "./restaurants/restaurantReducer";

const rootReducer = combineReducers({
    
    places: placesReducer,
    auth: authReducer,
    choosenFood :selectedRestorant,
    cart: cartReducer,
    order: orderReducer,
    restaurant: restaurantsReducer
});

export default rootReducer