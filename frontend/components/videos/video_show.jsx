import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VideoIndexSideContainer from './video_index_side_container';
import CommentIndexContainer from '../comments/comment_index_container';

// class VideoShow extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//         this.handlePlayVideo = this.handlePlayVideo.bind(this);
//         this.handleLikeVideo = this.handleLikeVideo.bind(this);
//         this.handleDislikeVideo = this.handleDislikeVideo.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchVideos();
//         this.props.fetchVideo(this.props.match.params.videoId);
//         window.scrollTo(0, 0);
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.video && prevProps.video.id != this.props.match.params.videoId) {
//             this.props.fetchVideo(this.props.match.params.videoId);
//             window.scrollTo(0, 0);
//         }
//     }

//     // handleSubmit() {
//     //     <Redirect to={`/edit/${this.props.match.params.videoId}`} />
//     // }
    
//     updateVideoButton() {
//         let updateButton;
        
//         if (this.props.currentUser && this.props.currentUser.id === this.props.video.uploader_id) {
//             updateButton = 
//                 <div className="update-button">
//                     <i className="fas fa-edit"></i>
//                     <Link to={`/edit/${this.props.match.params.videoId}`}>Edit Your Video</Link>
//                 </div>
//         } else {
//             updateButton = <div></div>;
//         }

//         return updateButton;
//     }

//     handlePlayVideo() {
//         this.props.updateViews({
//             id: this.props.video.id,
//             views: this.props.video.views + 1
//         });
//     }

//     handleLikeVideo() {
//         if (!this.props.currentUser) this.props.history.push('/login');

//         if (this.props.userLike.liked === undefined) {
//             this.props.createLike({
//                 video_id: this.props.video.id,
//                 liked: true
//             }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
//         } else {
//             if (this.props.userLike.liked === false) {
//                 this.props.updateLike({
//                     id: this.props.userLike.id,
//                     video_id: this.props.video.id,
//                     liked: true
//                 }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
//             } else {
//                 this.props.deleteLike(this.props.userLike.id)
//                     .then(() => this.props.fetchVideo(this.props.match.params.videoId))
//             }
//         }
//     }

//     handleDislikeVideo() {
//         if (!this.props.currentUser) this.props.history.push('/login');

//         if (this.props.userLike.liked === undefined) {
//             this.props.createLike({
//                 video_id: this.props.video.id,
//                 liked: false
//             }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
//         } else {
//             if (this.props.userLike.liked === true) {
//                 this.props.updateLike({
//                     id: this.props.userLike.id,
//                     video_id: this.props.video.id,
//                     liked: false
//                 }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
//             } else {
//                 this.props.deleteLike(this.props.userLike.id)
//                     .then(() => this.props.fetchVideo(this.props.match.params.videoId))
//             }
//         }
//     }

//     render() {
//         if (!this.props.video) return null;

//         let vidLike;
//         let vidDislike;
//         if (this.props.userLike.liked !== undefined) {
//             if (this.props.userLike.liked) {
//                 vidLike = "vidLikeActive",
//                 vidDislike = ""
//             } else {
//                 vidLike = "",
//                 vidDislike = "vidDislikeActive"
//             }
//         }

//         return (
//             <div className="video-show-greater">
//                 <div className="video-show">
//                     <div className="video-show-video">
//                         <video controls width="300" height="300" onPlay={this.handlePlayVideo} key={this.props.video.videoUrl}>
//                             <source src={this.props.videos[this.props.match.params.videoId].videoUrl} type='video/mp4' />
//                         </video>
//                     </div>
//                     <div className="video-show-title">
//                         <div>{this.props.video.title}</div>
//                     </div>
//                     <div className="video-show-counts">
//                         <div className="video-show-counts-left">
//                             <div>{this.props.videos[this.props.match.params.videoId].views} views</div>
//                             <div>{" \u2022 "}</div>
//                             <div>{this.props.videos[this.props.match.params.videoId].publishDate}</div>
//                         </div>
//                         <div className="video-show-counts-right">
//                             <div className={vidLike}>
//                                 <i className="fas fa-thumbs-up" onClick={this.handleLikeVideo}>
//                                     <div className="video-like-count">{this.props.video.numLikes}</div>
//                                 </i>
//                             </div>
//                             <div className={vidDislike}>
//                                 <i className="fas fa-thumbs-down" onClick={this.handleDislikeVideo}>
//                                     <div className="video-dislike-count">{this.props.video.numDislikes}</div>
//                                 </i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="video-show-user">
//                         <div className="video-show-user-left">
//                             <i className="fas fa-user-circle"></i>
//                         </div>
//                         <div>{this.props.video.username}</div>
//                         <i className="fas fa-check-circle"></i>
//                         {this.updateVideoButton()}
//                     </div>
//                     <div className="video-show-description">
//                         <div>{this.props.video.description}</div>
//                     </div>
//                     <div className="comment-index-container">
//                         <CommentIndexContainer video={this.props.video}/>
//                     </div>
//                 </div>
//                 <div className="video-show-side">
//                     <VideoIndexSideContainer />
//                 </div>
//             </div>
//         )
//     }
// }

const videoShow = (props) => {
    useEffect(() => {
        props.fetchVideos();
        props.fetchVideo(props.match.params.videoId);
        window.scrollTo(0, 0);
    }, [props.match.params.videoId]);
    
    const updateVideoButton = () => {
        let updateButton;
        
        if (props.currentUser && props.currentUser.id === props.video.uploader_id) {
            updateButton = 
                <div className="update-button">
                    <i className="fas fa-edit"></i>
                    <Link to={`/edit/${props.match.params.videoId}`}>Edit Your Video</Link>
                </div>
        } else {
            updateButton = <div></div>;
        }

        return updateButton;
    }

    const handlePlayVideo = () => {
        props.updateViews({
            id: props.video.id,
            views: props.video.views + 1
        });
    }

    const handleLikeVideo = () => {
        if (!props.currentUser) props.history.push('/login');

        if (props.userLike.liked === undefined) {
            props.createLike({
                video_id: props.video.id,
                liked: true
            }).then(() => props.fetchVideo(props.match.params.videoId))
        } else {
            if (props.userLike.liked === false) {
                props.updateLike({
                    id: props.userLike.id,
                    video_id: props.video.id,
                    liked: true
                }).then(() => props.fetchVideo(props.match.params.videoId))
            } else {
                props.deleteLike(props.userLike.id)
                    .then(() => props.fetchVideo(props.match.params.videoId))
            }
        }
    }

    const handleDislikeVideo = () => {
        if (!props.currentUser) props.history.push('/login');

        if (props.userLike.liked === undefined) {
            props.createLike({
                video_id: props.video.id,
                liked: false
            }).then(() => props.fetchVideo(props.match.params.videoId))
        } else {
            if (props.userLike.liked === true) {
                props.updateLike({
                    id: props.userLike.id,
                    video_id: props.video.id,
                    liked: false
                }).then(() => props.fetchVideo(props.match.params.videoId))
            } else {
                props.deleteLike(props.userLike.id)
                    .then(() => props.fetchVideo(props.match.params.videoId))
            }
        }
    }

    if (!props.video) return null;

    let vidLike;
    let vidDislike;
    if (props.userLike.liked !== undefined) {
        if (props.userLike.liked) {
            vidLike = "vidLikeActive",
            vidDislike = ""
        } else {
            vidLike = "",
            vidDislike = "vidDislikeActive"
        }
    }

    return (
        <div className="video-show-greater">
            <div className="video-show">
                <div className="video-show-video">
                    <video controls width="300" height="300" onPlay={handlePlayVideo} key={props.video.videoUrl}>
                        <source src={props.videos[props.match.params.videoId].videoUrl} type='video/mp4' />
                    </video>
                </div>
                <div className="video-show-title">
                    <div>{props.video.title}</div>
                </div>
                <div className="video-show-counts">
                    <div className="video-show-counts-left">
                        <div>{props.videos[props.match.params.videoId].views} views</div>
                        <div>{" \u2022 "}</div>
                        <div>{props.videos[props.match.params.videoId].publishDate}</div>
                    </div>
                    <div className="video-show-counts-right">
                        <div className={vidLike}>
                            <i className="fas fa-thumbs-up" onClick={handleLikeVideo}>
                                <div className="video-like-count">{props.video.numLikes}</div>
                            </i>
                        </div>
                        <div className={vidDislike}>
                            <i className="fas fa-thumbs-down" onClick={handleDislikeVideo}>
                                <div className="video-dislike-count">{props.video.numDislikes}</div>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="video-show-user">
                    <div className="video-show-user-left">
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <div>{props.video.username}</div>
                    <i className="fas fa-check-circle"></i>
                    {updateVideoButton()}
                </div>
                <div className="video-show-description">
                    <div>{props.video.description}</div>
                </div>
                <div className="comment-index-container">
                    <CommentIndexContainer video={props.video}/>
                </div>
            </div>
            <div className="video-show-side">
                <VideoIndexSideContainer />
            </div>
        </div>
    )
}

export default videoShow;