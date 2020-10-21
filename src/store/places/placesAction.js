import { ADD_PLACE, FETCH_PLACES, DELETE_PLACE } from "../actionTypes";
import instance from './../axiosInterceptor';
import { PLACES } from "../../constants/reqApi";
import axios from 'axios';
import { googleApiKey } from "../../environments/environment";

export const addPlace = (name, description, location) => async (dispatch, getState) => {

    const response = await instance.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${googleApiKey}`);

    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    if (!response.resData.results) {
        throw new Error('Something went wrong!');
    }

    const address = resData.results[0].formatted_address;

    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getState().auth.token

        },

    };
    try {
        const response = await axios.post( PLACES, { name, description, latitude, longitude, address }, config)
        dispatch({ type: ADD_PLACE, payload: response.data })
    } catch{ err => console.log('err', err) };
}




export const fetchPlaces = () => async (dispatch, getState) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getState().auth.token
        }
    };
    try {
        const response = await instance.get(PLACES, options)
        dispatch({ type: FETCH_PLACES, places: response.data })
    } catch (error) {
        console.log('error', error)
    }
}

export const deletePlace = (payload) => async (dispatch, getState) => {
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getState().auth.token
        }

    };
    try {
        const response = await instance.delete(`${PLACES}${payload}`, options)
      if(response.status===200){
        dispatch({ type: DELETE_PLACE, placeId: payload })}
        dispatch(fetchPlaces())
    } catch (err) {
        console.log('error', error)
    }

}



