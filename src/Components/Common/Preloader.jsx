import preloader from "../../images/preloader.svg";
import React from "react";

function Preloader(props) {
    return (
        <>
            <img src={preloader} alt="preloader" style={props.style}/>
        </>
    )
}

export default Preloader;