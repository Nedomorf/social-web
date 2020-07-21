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

export default authReducer;