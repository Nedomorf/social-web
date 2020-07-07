const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_SHORT_PAGES = 'SET-SHORT-PAGES';
const SWITCH_LEFT_PAGE = 'SWITCH-LEFT-PAGE';
const SWITCH_RIGHT_PAGE = 'SWITCH-RIGHT-PAGE';

let initialState = {
    users: [],
    count: 10,
    totalCount: 1,
    page: 1,
    shortPages: [1, 2, 3, 4, 5, '...'],
    toLeftPage: false,
    toRightPage: true
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
            return  {
                ...state,
                shortPages: action.shortPages,
            }

        case SWITCH_LEFT_PAGE:
            return  {
                ...state,
                toLeftPage: action.switchLeftPage
            }

        case SWITCH_RIGHT_PAGE:
            return  {
                ...state,
                toRightPage: action.switchRightPage
            }

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

export default usersReducer;
