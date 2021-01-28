import React from 'react';
import { Link } from 'react-router-dom';

const sideNavbar = (props) => {
    const submit = () => {
        props.closeSide(false);
    }

    let openShow = props.is_open ? "side-navbar-open" : "";

    return (
        <div>
            {props.is_open && <div className="overlay" onClick={submit}/> }
            <div className={"side-navbar "+openShow} >
                <div className="side-navbar-top">
                    <div className="side-navbar-menu">
                        <i className="fas fa-bars" onClick={props.closeSide}></i>
                    </div>
                    <Link to="/" className="side-navbar-top-home" onClick={props.closeSide}>
                        <i className="fab fa-youtube"></i>
                        <div>ViewTube</div>
                    </Link>
                </div>
                <Link to='/' className="side-navbar-home" onClick={props.closeSide}>
                    <i className="fas fa-home"></i>
                    <div>Home</div>
                </Link>
                <a href="https://github.com/besenio" target="_" className="side-navbar-github">
                    <i className="fab fa-github"></i>
                    <div>Github</div>
                </a>
                <a href="https://www.linkedin.com/in/kevin-besenio/" target="_" className="side-navbar-linkedin">
                    <i className="fab fa-linkedin"></i>
                    <div>LinkedIn</div>
                </a>
                <a href="https://angel.co/u/besenio" target="_" className="side-navbar-angellist">
                    <i className="fab fa-angellist"></i>
                    <div>AngelList</div>
                </a>
            </div>
        </div>
    )
}

export default sideNavbar;