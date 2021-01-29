import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import TopNavbarContainer from "./top_navbar/top_navbar_container";
import SideNavbarContainer from "./side_navbar/side_navbar_container";
import VideoIndexContainer from "./videos/video_index_container";
import Modal from "./modal/modal_conatiner"
import VideoShowContainer from './videos/video_show_container';
import EditVideoFormContainer from "./videos/edit_video_form_container";
import SearchVideoIndexContainer from "./search/search_video_index_container";
import ReactGA from 'react-ga';

const App = () => {
    useEffect(() => {
        ReactGA.initialize('G-YKYXGQZ7E6');
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div>
            <Route path="/" component={TopNavbarContainer}/>
            <SideNavbarContainer />
            <Modal />
            <Route exact path="/" component={VideoIndexContainer}/>
            <Switch>
                <Route exact path="/edit/:videoId" component={EditVideoFormContainer}/>
                <Route exact path="/videos/:videoId" component={VideoShowContainer} />
                <Route exact path='/search/:query' component={SearchVideoIndexContainer} />
            </Switch>
        </div>
    )
};

export default App;