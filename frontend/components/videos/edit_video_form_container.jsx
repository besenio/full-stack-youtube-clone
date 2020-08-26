import { connect } from 'react-redux';
import EditVideoForm from './edit_video_form';
import { fetchVideo, updateVideo, deleteVideo, clearVideoErrors } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    formType: 'Update Video',
    currentUser: state.session.id,
    errors: state.errors.videoErrors
});

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    updateVideo: video => dispatch(updateVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    clearVideoErrors: () => dispatch(clearVideoErrors())
});

export default connect(mSTP, mDTP)(EditVideoForm);
