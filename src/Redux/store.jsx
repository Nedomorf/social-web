import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    Profile: profileReducer,
    Users: usersReducer,
    auth: authReducer,
    Friends: friendsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;