import instance from "../axiosInterceptor"
import { RESTAURANTS } from "../../constants/reqApi"
import { FETCH_RESTAURANTS } from "../actionTypes";

export const fetchRestaurants = () => async (dispatch, getState) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getState().auth.token
        }
    };
    try {
        const response = await instance.get(RESTAURANTS, options)
        dispatch({ type: FETCH_RESTAURANTS, payload: response.data })
    } catch (error) {
        console.log(' error', error)

    }

}