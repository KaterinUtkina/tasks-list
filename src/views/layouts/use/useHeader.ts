import React, {useState} from "react";

export function useHeader() {
    const [open, setOpen] = useState<boolean>(false);

    const settingsClickHandler = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setChecked(event.target.checked);
    }

    return {
        open,
        settingsClickHandler,
        handleClose,
        handleChange
    }
}
