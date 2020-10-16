import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profile_dropdown';

class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            search: ""
        }
        this.submit = this.submit.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInput(e) {
        this.setState({ search: e.currentTarget.value });
    }

    handleSearch() {
        if (this.state.search !== "") {
            this.props.history.push(`/search/${this.state.search}`);
        }
        this.setState({ search: "" });
    }

    submit() {
        this.props.openSidebar(true);
    }

    handleDropdown() {
        this.setState({ showDropdown: !this.state.showDropdown });
    }

    display() {
        return (this.props.currentUser ? (
        <div className="signed-in-greeting">
            <div className="dropdown-greeting" onClick={this.handleDropdown}>
                {this.props.currentUser.username[0].toUpperCase()}
            </div>
            <div className="drop-down-menu">
                <ProfileDropdown
                    logout={this.props.logout}
                    currentUser={this.props.currentUser}
                    handleDropdown={this.handleDropdown}
                    showDropdown={this.state.showDropdown}
                />
            </div>
        </div>) : (
        <div className=".top-navbar-profile-signin">
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
                    <form className="navbar-center-bar" onSubmit={this.handleSearch}>
                        <input type="text" placeholder="Search" onChange={this.handleInput} value={this.state.search}/>
                    </form>
                    <button className="navbar-center-button" onClick={this.handleSearch}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="top-navbar-right">
                    <div className="top-navbar-video">
                        <i className="fas fa-video "
                            onClick={() => {
                                    (this.props.currentUser ? this.props.openModal({type: 'createVideo'}) : this.props.history.push('/login'))
                            }}
                        ></i>
                    </div>
                    {/* <div className="top-navbar-apps">
                        <i className="fas fa-th"></i>
                    </div>
                    <div className="top-navbar-settings">
                        <i className="fas fa-ellipsis-v"></i>
                    </div> */}
                    <div className="top-navbar-profile">
                        <div>{this.display()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNavbar;
