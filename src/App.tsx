import React from 'react';
import Header from './views/layouts/Header';
import Default from "./views/layouts/Default";
import "./assets/scss/main-page.scss";
import {Paper} from "@mui/material";

function App() {
  return (
      <div className={"main-page"}>
          <Paper variant="outlined" className={"main-page__paper"}>
              <Header/>
              <Default/>
          </Paper>
      </div>
  );
}

export default App;
