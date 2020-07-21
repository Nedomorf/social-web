import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Messages from "./Components/Messages/Messages";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";

function App() {
    return (
        <div className="App">
            <NavBarContainer/>
            <Switch>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                {/*<Route path='/messages' render={() => <Messages/>}/>*/}
                <Route path='/friends' render={() => <FriendsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </Switch>
        </div>
    );
}

export default App;
