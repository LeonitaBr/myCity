import { ADD_PLACE, FETCH_PLACES, DELETE_PLACE } from "../actionTypes";
import Place from "../../models/Place";


const initialState = {
    places: []
}

const placesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:

            const newPlace = new Place(
                action.payload._id,
                action.payload.name,
                action.payload.description,
                action.payload.latitude,
                action.payload.longitude,
                action.payload.address)
            return { places: state.places.concat(newPlace) }
        case FETCH_PLACES:
            return {
                places: action.places
            }
        case DELETE_PLACE:
            const places= state.places.filter(item => item.id !== action.placeId)
            return {
                ...state,
                places: places
            }

        default:
            return state
    }
}

export default placesReducer