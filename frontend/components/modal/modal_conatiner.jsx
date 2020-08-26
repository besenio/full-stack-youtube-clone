import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Modal from './modal';

const mSTP = state => ({
    modal: state.ui.modal,
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);
