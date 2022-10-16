import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import "../../assets/scss/header.scss";
import {IconButton} from "@mui/material";

function Header() {
    return (
        <div className={"header"}>
            <h1>To Do</h1>
            <IconButton aria-label="open-switch-news-popup" className={"header__settings"}>
                <SettingsIcon fontSize="large"/>
            </IconButton>
        </div>
    );
}

export default Header;
