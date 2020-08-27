import React from 'react';
import { Redirect, Link } from 'react-router-dom'

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    handleSubmit() {
        <Redirect to={`/edit/${this.props.match.params.videoId}`} />
    }

    updateVideoButton() {
        let updateButton = 
            <div className="update-button">
                {/* <input type="submit" onClick={this.handleSubmit} value="Edit Your Video"/> */}
                <Link to={`/edit/${this.props.match.params.videoId}`}>Edit Your Video</Link>
            </div>
        console.log(this.props)
        if (this.props.currentUser && this.props.video.uploader_id !== this.props.currentUser.id) {
            updateButton = <div></div>;
        }

        return updateButton;
    }

    render() {

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
                    {this.updateVideoButton()}
                </div>
                <div className="video-show-description">
                    <div>{this.props.video.description}</div>
                </div>
            </div>
        )
    }

}

export default VideoShow;
