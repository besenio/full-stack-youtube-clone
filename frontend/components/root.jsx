import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Auth from "./auth";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Auth />
        </HashRouter>  
    </Provider>
);

export default Root;
