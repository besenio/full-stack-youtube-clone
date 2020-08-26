import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import TopNavbar from './top_navbar';
import { openSidebar } from '../../actions/sidenavbar_actions'
import { openModal } from '../../actions/modal_actions'; 

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openSidebar: is_open => dispatch(openSidebar(is_open)),
    openModal: open_modal => dispatch(openModal(open_modal))
});

export default connect(mSTP, mDTP)(TopNavbar);
