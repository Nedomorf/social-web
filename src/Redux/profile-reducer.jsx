import {userProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

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
    newPostText: "New post...",
    profile: null,
    isFetching: false
};

let profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                postId: id++,
                post: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "New post..."
            };
        case CHANGE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;

    }

}

export const addPost = () => ({
    type: ADD_POST
})

export const changePostText = (newPostText) => ({
    type: CHANGE_POST_TEXT,
    newPostText
})

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
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
                // this.props.setTotalCount(res.data.totalCount);
                dispatch(toggleIsFetching(false))
            })

    }
}

export default profileReducer;
