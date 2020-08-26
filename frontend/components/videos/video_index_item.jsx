import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video }) => {
    return (
        <div className="video-index-item">
            <Link to={`/videos/${video.id}`}>
                <img src={video.thumbnailUrl} width="300" height="180" className="video-thumbnail"/>
                <div className="video-top">
                    <i className="far fa-user-circle"></i>
                    <div className="video-title">{video.title}</div>
                </div>
                <div className="video-middle">
                    <div>{video.username}</div>
                    <i className="fas fa-check-circle"></i>
                </div>
                <div className="video-bottom">
                    <span>{Math.floor(Math.random() * 1000)} views</span>
                    <span>{" \u2022 "}</span>
                    <span>6 days ago</span>
                </div>
            </Link>
        </div>
    );
};

export default VideoIndexItem;
