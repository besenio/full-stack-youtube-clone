import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.openSidebar(true);
    }

    display() {
        return (this.props.currentUser ? (
        <div className="signed-in-greeting">
            <div className="dropdown-greeting">Hi, {this.props.currentUser.username[0].toUpperCase() + this.props.currentUser.username.slice(1).toLowerCase()}!</div>
            <div className="drop-down-menu">
                {/* <a href="https://github.com/" className="side-navbar-github">
                    <i className="fab fa-github"></i>
                    <div>Github</div>
                </a>
                <a href="https://www.linkedin.com/" className="side-navbar-linkedin">
                    <i className="fab fa-linkedin"></i>
                    <div>LinkedIn</div>
                </a>
                <a href="https://angel.co/" className="side-navbar-angellist">
                    <i className="fab fa-angellist"></i>
                    <div>AngelList</div>
                </a> */}
                <Link className="drop-down-logout" to="/" onClick={() => this.props.logout()}>
                    {/* <i class="fas fa-sign-out-alt"></i> */}
                    <div>Sign Out?</div>
                </Link>
            </div>
        </div>) : (
        <div>
            <Link className="switch-button" to="/login">
                <i className="fas fa-user-circle"></i>
                SIGN IN
            </Link>
        </div>)
    )}

    

    render() {
        return (
            <div className="top-navbar">
                <div className="top-navbar-left">
                    <div className="top-navbar-sidebar">
                        <i className="fas fa-bars" onClick={this.submit}></i>
                    </div>
                    <Link to="/" className="top-navbar-splash">
                        <i className="fab fa-youtube"></i>
                        <div>ViewTube</div>
                    </Link>
                </div>
                <div className="top-navbar-center">
                    <input type="text" placeholder="  Search"/>
                    <i className="fas fa-search"></i>
                </div>
                <div className="top-navbar-right">
                    <div className="top-navbar-video">
                        <i className="fas fa-video "
                            onClick={() => {
                                    (this.props.currentUser ? this.props.openModal({type: 'createVideo'}) : this.props.history.push('/login'))
                            }}
                        ></i>
                    </div>
                    <div className="top-navbar-apps">
                        <i className="fas fa-th"></i>
                    </div>
                    <div className="top-navbar-settings">
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                    <div className="top-navbar-profile">
                        <div>{this.display()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNavbar;
