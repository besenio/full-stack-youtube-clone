import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    video: state.entities.videos[ownProps.match.params.videoId],
    videos: state.entities.videos
})

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    updateViews: video => dispatch(updateViews(video))
});

export default connect(mSTP, mDTP)(VideoShow);
