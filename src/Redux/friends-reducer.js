const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    friends: [],
    count: 100,
    totalCount: 1,
    page: 1,
    isFetching: false
};

let friendsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UNFOLLOW_FRIEND:
            return {
                ...state,
                users: state.friends.map(friend => {
                    if (friend.id === action.id) {
                        return {...friend, followed: false}
                    }
                    return friend;
                })
            };

        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
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

        case TOGGLE_IS_FETCHING:
            return  {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;

    }

}

export const unfollowFriend = (id) => ({
    type: UNFOLLOW_FRIEND,
    id
})

export const setFriends = (friends) => ({
    type: SET_FRIENDS,
    friends
})

export const setPage = (page) => ({
    type: SET_PAGE,
    page
})
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export default friendsReducer;
