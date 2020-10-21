const { SIGN_UP, LOGOUT, SIGN_IN } = require("../actionTypes")

const initialState = {
    token: '',
    userId: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case SIGN_UP:
            return{
                ...state,
                userId: action.user
            }
            case SIGN_IN:
            return {
                ...state,
                token: action.token
            }
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default authReducer