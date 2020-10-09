import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos, updateViews } from '../../actions/video_actions';
import { createLike, updateLike, deleteLike } from '../../actions/like_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    video: state.entities.videos[ownProps.match.params.videoId],
    videos: state.entities.videos,
    userLike: state.entities.like
})

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    updateViews: video => dispatch(updateViews(video)),
    createLike: like => dispatch(createLike(like)),
    updateLike: like => dispatch(updateLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
});

export default connect(mSTP, mDTP)(VideoShow);
