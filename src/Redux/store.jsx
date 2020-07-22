import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import friendsReducer from "./friends-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    Profile: profileReducer,
    Users: usersReducer,
    auth: authReducer,
    Friends: friendsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;