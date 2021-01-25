import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

const videoIndex = (props) => {
    useEffect(() => {
        props.fetchVideos();
    }, [props.videos.length]);

    return (
        <div className="videos-index">
            <div className="video-index-sidebar">
                <Link to='/' className="video-index-home">
                    <i className="fas fa-home"></i>
                    <div>Home</div>
                </Link>
                <a href="https://github.com/besenio" target="_" className="video-index-github">
                    <i className="fab fa-github"></i>
                    <div>Github</div>
                </a>
                <a href="https://www.linkedin.com/in/kevin-besenio/" target="_" className="video-index-linkedin">
                    <i className="fab fa-linkedin"></i>
                    <div>LinkedIn</div>
                </a>
                <a href="https://angel.co/u/besenio" target="_" className="video-index-angellist">
                    <i className="fab fa-angellist"></i>
                    <div>AngelList</div>
                </a>
            </div>
            <div className="video-index-main">
                <h1>Recommended</h1>
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

export default videoIndex;