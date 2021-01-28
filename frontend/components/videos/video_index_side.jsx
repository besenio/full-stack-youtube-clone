import React, { useState, useEffect } from 'react';
import VideoIndexItem from './video_index_item';

const videoIndexSide = (props) => {
    const [incomingVideos, setIncomingVideos] = useState([]);

    useEffect(() => {
        props.fetchVideos();
        setIncomingVideos(props.videos
            .filter(video => video.id !== props.parentVideoId)
            .slice(0, 5)
            .sort((a, b) => 0.5 - Math.random())
        );
    }, [props.parentVideoId, props.videos.length]);

    return (
        <div className="videos-index">
            <div className="video-index-main">
                <h1>Up Next</h1>
                <ul className="videos-all">
                    {
                        incomingVideos.map(video => (
                            <VideoIndexItem video={video} key={video.id}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default videoIndexSide;