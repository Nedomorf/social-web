import {usersAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_SHORT_PAGES = 'SET-SHORT-PAGES';
const SWITCH_LEFT_PAGE = 'SWITCH-LEFT-PAGE';
const SWITCH_RIGHT_PAGE = 'SWITCH-RIGHT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE-FOLLOWING-PROCESS';
// const ADD_FRIEND = 'ADD-FRIEND';
// const REMOVE_FRIEND = 'REMOVE-FRIEND';

let initialState = {
    users: [],
    friends: [],
    count: 10,
    totalCount: 1,
    page: 1,
    shortPages: [1, 2, 3, 4, 5, '...'],
    toLeftPage: false,
    toRightPage: true,
    isFetching: false,
    followingInProcess: []
};

let usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW_USER:
            return {
                ...state,
                friends: [...state.friends, action.id],
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
                friends: state.friends.filter(id => id !== action.id),
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_PAGE:
            return {
                ...state,
                page: action.page
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };

        case SET_SHORT_PAGES:
            return {
                ...state,
                shortPages: action.shortPages,
            }

        case SWITCH_LEFT_PAGE:
            return {
                ...state,
                toLeftPage: action.switchLeftPage
            }

        case SWITCH_RIGHT_PAGE:
            return {
                ...state,
                toRightPage: action.switchRightPage
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_FOLLOWING_PROCESS:
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.id]
                    : state.followingInProcess.filter(id => id !== action.id)
            }

        // case ADD_FRIEND:
        //     return {
        //         ...state,
        //         friends: [...state.friends, action.id]
        //     }
        //
        // case REMOVE_FRIEND:
        //     return {
        //         ...state,
        //         friends: state.friends.filter(id => id !== action.id)
        //     }

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

export const setPage = (page) => ({
    type: SET_PAGE,
    page
})
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
})

export const setShortPages = (shortPages) => ({
    type: SET_SHORT_PAGES,
    shortPages,
})

export const switchLeftPage = (switchLeftPage) => ({
    type: SWITCH_LEFT_PAGE,
    switchLeftPage
})

export const switchRightPage = (switchRightPage) => ({
    type: SWITCH_RIGHT_PAGE,
    switchRightPage
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const toggleFollowingProcess = (isFetching, id) => ({
    type: TOGGLE_FOLLOWING_PROCESS,
    isFetching,
    id
})

// export const addFriend = (id) => ({
//     type: ADD_FRIEND,
//     id
// })
//
// export const removeFriend = (id) => ({
//     type: REMOVE_FRIEND,
//     id
// })

export const getUsers = (page, count) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(page, count)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
                dispatch(toggleIsFetching(false));
            })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProcess(true, id))
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followUser(id));
                }
                dispatch(toggleFollowingProcess(false, id))
            })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProcess(true, id))
        usersAPI.unFollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowUser(id));
                }
                dispatch(toggleFollowingProcess(false, id))
            })
    }
}


export default usersReducer;
