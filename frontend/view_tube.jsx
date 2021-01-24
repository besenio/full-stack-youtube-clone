import React from 'react'
import ReactDOM from 'react-dom'
import Root from "./components/root";
import configureStore from "./store/store";
import * as APIUtil from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');

    // window.signup = APIUtil.signup;
    // window.login = APIUtil.login;
    // window.logout = APIUtil.logout;
    // window.getState = store.getState;

    ReactDOM.render(<Root store={store}/>, root);
});
