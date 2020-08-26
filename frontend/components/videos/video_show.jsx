import React from 'react';

class VideoShow extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        // const vidDate = this.props.video.created_at;

        if (!this.props.video) return null;

        return (
            <div className="video-show">
                <div className="video-show-video">
                    <video controls width="300" height="300">
                        <source src={this.props.video.videoUrl} type='video/mp4' />
                    </video>
                </div>
                <div className="video-show-title">
                    <div>{this.props.video.title}</div>
                </div>
                <div className="video-show-counts">
                    {/* placeholder, need to work on features */}
                    <div className="video-show-counts-left">
                        <div>{Math.floor(Math.random() * 1000)} views</div>
                        <div>{" \u2022 "}</div>
                        <div>Aug 20, 2020</div>
                    </div>
                    {/* <div className="video-show-counts-right">
                        <i className="fas fa-thumbs-up">10k</i>
                        <i className="fas fa-thumbs-down">100</i>
                    </div> */}
                </div>
                <div className="video-show-user">
                    <i className="far fa-user-circle"></i>
                    <div>{this.props.video.username}</div>
                    <i className="fas fa-check-circle"></i>
                </div>
                <div className="video-show-description">
                    <div>{this.props.video.description}</div>
                </div>
            </div>
        )
    }

}

export default VideoShow;
