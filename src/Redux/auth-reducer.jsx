import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case TOGGLE_IS_FETCHING:
            return  {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;

    }

}

export const setUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth},
    isAuth
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const authMe = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setUserData(id, login, email, true));
                }
                dispatch(toggleIsFetching(false))
            })
    }
}

export const login = (formData) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.login(formData)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(authMe());
                } else if (res.data.resultCode === 1) {
                    let errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : "Some error."
                    let action = stopSubmit('login', {_error: errorMessage});
                    dispatch(action)
                }
                dispatch(toggleIsFetching(false))
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, false));
                }
                dispatch(toggleIsFetching(false))
            })
    }
}

export default authReducer;