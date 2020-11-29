import React from "react";
import { Link } from 'react-router-dom';
import { BottomBar } from "../styles";

const BottomNavbar = (props) => {
    return (
        <Link to={props.link}>
            <BottomBar>{props.text}</BottomBar>
        </Link>
    )
}

export default BottomNavbar;