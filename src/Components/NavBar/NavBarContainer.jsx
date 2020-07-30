import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

class NavBarContainer extends React.Component {

    render() {
        return (
            <NavBar {...this.props} />
        );
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login
});

let mapDispatchToProps = ({
    logout
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
