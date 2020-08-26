import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = state => ({
    errors: state.errors.sessionErrors,
    formType: 'Log In'
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    processDemo: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(LoginForm);
