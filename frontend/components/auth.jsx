import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LogInFormContainer from "./session/login_form_container";
import SignUpFormContainer from "./session/signup_form_container";
import App from "./app";

const Auth = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={App}/>
            <Redirect to="/" />
        </Switch>
    </div>
);

export default Auth;
