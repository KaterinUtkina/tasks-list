import React from 'react';
import Header from './views/layouts/Header';
import Default from "./views/layouts/Default";
import "./assets/scss/main-page.scss";
import {Paper} from "@mui/material";
import {QueryClient, QueryClientProvider} from "react-query";
import {NewsTickerProvider} from "./provider/NewsTickerProvider";

function App() {
    const queryClient = new QueryClient();
    return (
        <NewsTickerProvider>
            <QueryClientProvider client={queryClient}>
                <div className={"main-page"}>
                    <Paper variant="outlined" className={"main-page__paper"}>
                        <Header/>
                        <Default/>
                    </Paper>
                </div>
            </QueryClientProvider>
        </NewsTickerProvider>
  );
}

export default App;
