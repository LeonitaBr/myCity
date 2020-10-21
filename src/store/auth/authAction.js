import { SIGN_UP, SIGN_IN } from "../actionTypes"
import instance from './../axiosInterceptor'
import { AUTH } from './../../constants/reqApi';
import {navigate} from '../../navigators/navigationsRef';
import { getCashUser, cashUser, uncacheUser } from './../../utils/cacheHandler';
import axios from 'axios';


export const signUp = (name, email, password) => async (dispatch) => {
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await instance.post(AUTH + '/register', { name, email, password }, options)
        if (response.status === 200) {
            dispatch(login(email, password))
            dispatch({ type: SIGN_UP, userId: response.data.user })

        }
    } catch (error) {
        console.log('error', error.response);
    }

}

export const login = (email, password) => async (dispatch) => {
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await axios.post(AUTH + '/login', { email, password }, options)
        if (response.status === 200) {
            dispatch({ type: SIGN_IN, token: response.data })
            cashUser(response.data)
            navigate('Home')

        }
    } catch (error) {
        console.log('error', error.response);
    }
}


export const tryLogin = () => async (dispatch) => {
    const user = await getCashUser()
    if (!user) {
        navigate('AuthScreen');
        return;
    }
    const transformedData = JSON.parse(user);
    const { token } = transformedData;
    if (!token||token.length===0) {
        navigate('AuthScreen');
        return;
    }
    
    dispatch({ type: SIGN_IN, token: token });
    navigate('Home')
}

export const logout = () => (dispatch) => {
    uncacheUser();
    try {

        dispatch({ type: LOGOUT })
        navigate('AuthScreen');
    } catch (e) {
        console.log('e', e)
    }

}