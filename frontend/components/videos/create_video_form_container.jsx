import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo, clearVideoErrors } from '../../actions/video_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    video: {
        title: '',
        description: '',
        videoFile: null,
        videoUrl: null,
        thumbnailFile: null,
        thumbnailUrl: null
    },
    formType: 'Create Video',
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.videoErrors,
    loading: false
});

const mDTP = dispatch => ({
    createVideo: video => dispatch(createVideo(video)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(VideoForm);
