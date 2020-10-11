import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import VideoIndexSideContainer from './video_index_side_container';
import CommentIndexContainer from '../comments/comment_index_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayVideo = this.handlePlayVideo.bind(this);
        this.handleLikeVideo = this.handleLikeVideo.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchVideo(this.props.match.params.videoId);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.video && prevProps.video.id != this.props.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
            window.scrollTo(0, 0);
        }
    }

    handleSubmit() {
        <Redirect to={`/edit/${this.props.match.params.videoId}`} />
    }
    
    updateVideoButton() {
        let updateButton;
        
        if (this.props.currentUser && this.props.currentUser.id === this.props.video.uploader_id) {
            updateButton = 
                <div className="update-button">
                    <i className="fas fa-edit"></i>
                    <Link to={`/edit/${this.props.match.params.videoId}`}>Edit Your Video</Link>
                </div>
        } else {
            updateButton = <div></div>;
        }

        return updateButton;
    }

    handlePlayVideo() {
        this.props.updateViews({
            id: this.props.video.id,
            views: this.props.video.views + 1
        });
    }

    handleLikeVideo() {
        if (!this.props.currentUser) this.props.history.push('/login');

        if (this.props.userLike.liked === undefined) {
            this.props.createLike({
                video_id: this.props.video.id,
                liked: true
            }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
        } else {
            if (this.props.userLike.liked === false) {
                this.props.updateLike({
                    id: this.props.userLike.id,
                    video_id: this.props.video.id,
                    liked: true
                }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
            } else {
                this.props.deleteLike(this.props.userLike.id)
                    .then(() => this.props.fetchVideo(this.props.match.params.videoId))
            }
        }
    }

    handleDislikeVideo() {

    }

    render() {
        if (!this.props.video) return null;

        return (
            <div className="video-show-greater">
                <div className="video-show">
                    <div className="video-show-video">
                        <video controls width="300" height="300" onPlay={this.handlePlayVideo} key={this.props.video.videoUrl}>
                            <source src={this.props.videos[this.props.match.params.videoId].videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div className="video-show-title">
                        <div>{this.props.video.title}</div>
                    </div>
                    <div className="video-show-counts">
                        <div className="video-show-counts-left">
                            <div>{this.props.videos[this.props.match.params.videoId].views} views</div>
                            <div>{" \u2022 "}</div>
                            <div>{this.props.videos[this.props.match.params.videoId].publishDate}</div>
                        </div>
                        <div className="video-show-counts-right">
                            <i className="fas fa-thumbs-up" onClick={this.handleLikeVideo}>
                                <div className="video-like-count">{this.props.video.numLikes}</div>
                            </i>
                            <i className="fas fa-thumbs-down">
                                <div className="video-dislike-count">{this.props.video.numDislikes}</div>
                            </i>
                        </div>
                    </div>
                    <div className="video-show-user">
                        <div className="video-show-user-left">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div>{this.props.video.username}</div>
                        <i className="fas fa-check-circle"></i>
                        {this.updateVideoButton()}
                    </div>
                    <div className="video-show-description">
                        <div>{this.props.video.description}</div>
                    </div>
                    <div className="comment-index-container">
                        <CommentIndexContainer video={this.props.video}/>
                    </div>
                </div>
                <div className="video-show-side">
                    <VideoIndexSideContainer />
                </div>
            </div>
        )
    }

}

export default VideoShow;
