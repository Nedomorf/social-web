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
          <Route path="/profile" render={ () => <ProfileContainer store={props.store}/> }/>
          <Route path="/messages" render={ () => <Messages/> }/>
          <Route path="/users" render={ () => <UsersContainer store={props.store}/> }/>
      </Switch>
    </div>
  );
}

export default App;
