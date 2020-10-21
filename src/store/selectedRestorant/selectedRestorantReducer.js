import { SELECTED_RESTAURANT, SELECTED_FOOD } from "../actionTypes";

const initialState = {
    id: '',
    selectedFood: {}

}

const selectedRestorant = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_RESTAURANT:
            return {
                ...state,
                id: action.payload
            }
        case SELECTED_FOOD:
            return { ...state, selectedFood: action.payload }
        default:
            return state;
    }
}

export default selectedRestorant
