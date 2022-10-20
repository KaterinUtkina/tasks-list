import React from 'react';
import "../../assets/scss/news-ticker.scss";
import {useNewsTicker} from "./use/useNewsTicker";
import {Alert} from "@mui/material";

function NewsTicker() {
    const {
        news,
        error,
    } = useNewsTicker();

    return (
        <>
            {(error) ? (
                <Alert severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            ) : <></>}
            <div className={"news-ticker"}>
                <div className={"news-ticker__content"}>
                    {news.length ?
                        (<>
                            {news.map((article, index) => (
                                <p key={index}>{article.description}</p>
                            ))})
                        </>) : <></>
                    }
                </div>
            </div>
        </>
    );
}

export default NewsTicker;
