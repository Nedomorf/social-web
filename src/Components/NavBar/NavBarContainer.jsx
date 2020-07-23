import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {authMe} from "../../Redux/auth-reducer";

class NavBarContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <NavBar {...this.props} />
        );
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

let mapDispatchToProps = ({
    authMe
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
