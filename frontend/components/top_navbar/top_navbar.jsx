import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profile_dropdown';

const topNavbar = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState('');

    const handleInput = (e) => {
        setSearch(e.currentTarget.value);
    }

    const handleSearch = () => {
        if (search !== '') {
            props.history.push(`/search/${search}`);
        }
        setSearch('');
    }

    const submit = () => {
        props.openSidebar(true);
    }

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const display = () => {
        return (props.currentUser ? (
        <div className="signed-in-greeting">
            <div className="dropdown-greeting" onClick={handleDropdown}>
                {props.currentUser.username[0].toUpperCase()}
            </div>
            <div className="drop-down-menu">
                <ProfileDropdown
                    logout={props.logout}
                    currentUser={props.currentUser}
                    handleDropdown={handleDropdown}
                    showDropdown={showDropdown}
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

    return (
        <div className="top-navbar">
            <div className="top-navbar-left">
                <div className="top-navbar-sidebar">
                    <i className="fas fa-bars" onClick={submit}></i>
                </div>
                <Link to="/" className="top-navbar-splash">
                    <i className="fab fa-youtube"></i>
                    <div>ViewTube</div>
                </Link>
            </div>
            <div className="top-navbar-center">
                <form className="navbar-center-bar" onSubmit={handleSearch}>
                    <input type="text" placeholder="Search" onChange={handleInput} value={search}/>
                </form>
                <button className="navbar-center-button" onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="top-navbar-right">
                <div className="top-navbar-video">
                    <i className="fas fa-video "
                        onClick={() => {
                            (props.currentUser ? props.openModal({type: 'createVideo'}) : props.history.push('/login'))
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
                    <div>{display()}</div>
                </div>
            </div>
        </div>
    )
}

export default topNavbar;