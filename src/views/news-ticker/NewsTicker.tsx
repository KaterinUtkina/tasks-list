import React from 'react';
import "../../assets/scss/news-ticker.scss";
import {useNewsTicker} from "./use/useNewsTicker";
import {Alert, Snackbar} from "@mui/material";

function NewsTicker() {
    const {
        news,
        error,
        isLoading,
    } = useNewsTicker();

    if (isLoading) {
        return  <div className={"news-ticker is-loading"}>
            Loading...
        </div>
    }

    return (
        <>
            {(error) ? (
                <Snackbar
                    autoHideDuration={6000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={!!error}
                    key={error}
                >
                    <Alert severity="error">{error}</Alert>
                </Snackbar>
            ) : (
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
            )}
        </>
    );
}

export default NewsTicker;
