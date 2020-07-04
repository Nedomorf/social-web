import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    Profile: profileReducer,
    Users: usersReducer
});

let store = createStore(reducers);

export default store;