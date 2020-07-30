import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from "react-router-dom";
import Messages from "./Components/Messages/Messages";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader";
import {Moose} from "./Components/Common/Moose";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) return <Moose/>
        // if (!this.props.initialized) return <Preloader/>

        return (
            <div className="App">
                <NavBarContainer/>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    {/*<Route path='/messages' render={() => <Messages/>}/>*/}
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
