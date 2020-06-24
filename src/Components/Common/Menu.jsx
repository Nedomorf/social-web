import React from 'react';
import './Menu.css';

function Menu() {
    return (

        <div className="hamburgerMenu">
            <input id="menuToggle" type="checkbox"/>
            <label className="menuBtn" htmlFor="menuToggle">
                <span></span>
            </label>

            <div className="menuBox">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto assumenda commodi
                consequuntur doloribus illo in ipsa sint velit voluptates. Consectetur dicta dolorum excepturi pariatur
                quae rem ut veniam voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate dolorum, et explicabo fugit
                ipsam ipsum nobis nostrum omnis pariatur perferendis praesentium qui repudiandae rerum similique sint
                sit soluta voluptatibus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti dolorum eos et expedita
                ipsum odio placeat quaerat repellendus. Accusamus assumenda consequatur deserunt eligendi pariatur rerum
                sed tenetur velit, voluptatum.
            </div>
        </div>
    );
}

export default Menu;
