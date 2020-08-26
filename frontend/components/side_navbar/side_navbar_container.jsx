import { connect } from 'react-redux';
import { closeSidebar } from '../../actions/sidenavbar_actions'
import SideNavbar from './side_navbar'

const mSTP = state => {
    return {
        is_open: state.ui.sidenavbar.is_open
    }
};

const mDTP = dispatch => ({
    closeSide: is_close => dispatch(closeSidebar(is_close))
});

export default connect(mSTP, mDTP)(SideNavbar);
