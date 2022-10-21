import React, {useContext, useState} from "react";
import {NewsTickerContext, NewsTickerContextType} from "../../../provider/NewsTickerProvider";

export function useHeader() {
    const [open, setOpen] = useState<boolean>(false);
    const { isVisible, setIsVisible } = useContext(NewsTickerContext) as NewsTickerContextType;

    const settingsClickHandler = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);

    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsVisible(event.target.checked);
    }

    return {
        open,
        settingsClickHandler,
        handleClose,
        handleChange,
        isVisible
    }
}
