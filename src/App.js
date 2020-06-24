import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {Switch, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import Users from "./Components/Users/Users";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route path="/profile" render={ () => <Profile/> }/>
          <Route path="/messages" render={ () => <Messages/> }/>
          <Route path="/users" render={ () => <Users/> }/>
      </Switch>
    </div>
  );
}

export default App;
