import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = state => ({
    errors: state.errors.sessionErrors,
    formType: 'Sign Up'
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SignupForm);
