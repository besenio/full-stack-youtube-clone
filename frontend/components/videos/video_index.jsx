import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        return (
            <div className="videos-index">
                <div>
                    <h1>Recommended</h1>
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

export default VideoIndex;
