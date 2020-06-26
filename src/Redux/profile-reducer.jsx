const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

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

export default profileReducer;
