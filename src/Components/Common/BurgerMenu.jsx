import React from "react";
import { bubble as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom";
import './BurgerMenu.css';

export default props => {
    return (
        // Pass on our props
        <Menu {...props}>
            <NavLink className="menu-item" to="/">
                Home
            </NavLink>

            <NavLink className="menu-item" to="/start">
                Start
            </NavLink>

            <NavLink className="menu-item" to="/hangman">
                Hangman
            </NavLink>

        </Menu>
    );
};