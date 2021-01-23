import React, { useEffect } from 'react';
import VideoIndexItem from './video_index_item';

const videoIndexSide = (props) => {
    useEffect(() => {
        props.fetchVideos();
    }, []);

    return (
        <div className="videos-index">
            <div className="video-index-main">
                <h1>Up Next</h1>
                <ul className="videos-all">
                    {
                        props.videos.map(video => (
                            <VideoIndexItem video={video} key={video.id}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default videoIndexSide;