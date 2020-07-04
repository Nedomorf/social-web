const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [],
};

let usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case SET_USERS:
            return  {
                ...state,
                users: action.users
            };

        default:
            return state;

    }

}

export const followUser = (id) => ({
    type: FOLLOW_USER,
    id
})

export const unfollowUser = (id) => ({
    type: UNFOLLOW_USER,
    id
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export default usersReducer;
