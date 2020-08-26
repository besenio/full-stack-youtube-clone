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
        <div>
            <Link className="switch-button" to="/" onClick={() => this.props.logout()}>LOGOUT</Link>
        </div>) : (
        <div>
            <Link className="switch-button" to="/login">SIGN IN</Link>
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
                    <a href="#">
                        <div className="top-navbar-profile">
                            <i className="fas fa-user-circle"></i>
                            <div>{this.display()}</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default TopNavbar;
