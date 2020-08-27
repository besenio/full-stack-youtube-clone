import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LogInFormContainer from "./session/login_form_container";
import SignUpFormContainer from "./session/signup_form_container";
import TopNavbarContainer from "./top_navbar/top_navbar_container";
import SideNavbarContainer from "./side_navbar/side_navbar_container";
import VideoIndexContainer from "./videos/video_index_container";
import Modal from "./modal/modal_conatiner"
import VideoShowContainer from './videos/video_show_container';
import EditVideoFormContainer from "./videos/edit_video_form_container"

const App = () => (
    <div>
        <Route exact path="/" component={TopNavbarContainer}/>
        <SideNavbarContainer />
        <Modal />
        <Route exact path="/" component={VideoIndexContainer}/>
        <Switch>
            <Route exact path="/edit/:videoId" component={EditVideoFormContainer}/>
            <Route exact path="/videos/:videoId" component={VideoShowContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;
