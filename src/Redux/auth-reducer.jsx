import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
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

export const setUserData = (data) => ({
    type: SET_USER_DATA,
    data
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
                    dispatch(setUserData(data.data));
                }
                dispatch(toggleIsFetching(false))
            })
    }
}

export default authReducer;