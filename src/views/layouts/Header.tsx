import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import "../../assets/scss/header.scss";
import {useHeader} from "./use/useHeader";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Switch
} from "@mui/material";

function Header() {
    const {
        open,
        settingsClickHandler,
        handleClose,
        handleChange,
    } = useHeader();

    return (
        <div className={"header"}>
            <h1>To Do</h1>
            <div className={"header__settings"}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    className={"header__settings-dialog"}
                >
                    <DialogTitle id="alert-dialog-title">
                        Settings
                    </DialogTitle>
                    <DialogContent className={"header__settings-dialog-content"}>
                        <span>Newsline visibility</span>
                        <Switch
                            checked={true}
                            onChange={handleChange}
                            className={"custom-switch"}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>close</Button>
                    </DialogActions>
                </Dialog>
                <IconButton
                    onClick={settingsClickHandler}
                    aria-label="open-switch-news-popup"
                    className={"header__settings"}>
                    <SettingsIcon fontSize="large"/>
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
