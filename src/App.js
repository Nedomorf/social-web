import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {Switch, Route} from "react-router-dom";
import Messages from "./Components/Messages/Messages";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
          <Route path='/messages' render={ () => <Messages/> }/>
          <Route path='/users' render={ () => <UsersContainer /> }/>
      </Switch>
    </div>
  );
}

export default App;
