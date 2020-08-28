import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndexSide extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        return (
            <div className="videos-index">
                <div className="video-index-main">
                    <h1>Up Next</h1>
                    <ul className="videos-all">
                        {
                            this.props.videos.map(video => (
                                <VideoIndexItem video={video} key={video.id}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

export default VideoIndexSide;
