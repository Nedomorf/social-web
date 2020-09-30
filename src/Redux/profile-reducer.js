import {userProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';
const SET_AVATAR = 'SET-AVATAR';

let id = 0;

let initialState = {
    posts: [
        {postId: `${++id}`, post: "123"},
        {postId: `${++id}`, post: "456"},
        {postId: `${++id}`, post: "789"},
        {postId: `${++id}`, post: "qwerty"},
        {postId: `${++id}`, post: "zxcv"},
        {postId: `${++id}`, post: "asdf"},
        {postId: `${++id}`, post: "loool"},
    ],
    profile: null,
    status: 'Изменить статус...',
    avatar: 'http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png',
    isFetching: false
};

let profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                postId: ++id,
                post: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_AVATAR:
            return  {
                ...state,
                avatar: action.avatar
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;

    }

}

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
})

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const setAvatar = (avatar) => ({
    type: SET_AVATAR,
    avatar
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const getProfile = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true))
        userProfileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setProfile(data));
                debugger
                // this.props.setTotalCount(res.data.totalCount);
                dispatch(toggleIsFetching(false))
            })
        userProfileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
                // this.props.setTotalCount(res.data.totalCount);
                dispatch(toggleIsFetching(false))
            })

    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        userProfileAPI.updateUserStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(data));
                }
                // this.props.setTotalCount(res.data.totalCount);
                dispatch(toggleIsFetching(false))
            })
    }
}

export const updateUserAvatar = (avatar) => {
    return (dispatch) => {
        userProfileAPI.uploadUserAvatar(avatar)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAvatar(data))
                }
            })
    }
}

export default profileReducer;
