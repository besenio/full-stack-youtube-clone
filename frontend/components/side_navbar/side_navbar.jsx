import React from 'react';
import { Link } from 'react-router-dom';

class SideNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.closeSide(false);
    }

    render() {
        let openShow = this.props.is_open ? "side-navbar-open" : "";
        return (
            <div>
                {this.props.is_open && <div className="overlay" onClick={this.submit}/> }
                <div className={"side-navbar "+openShow} >
                    <div className="side-navbar-top">
                        <div className="side-navbar-menu">
                            <i className="fas fa-bars" onClick={this.props.closeSide}></i>
                        </div>
                        <Link to="/" className="side-navbar-top-home">
                            <i className="fab fa-youtube"></i>
                            <div>ViewTube</div>
                        </Link>
                    </div>
                    <Link to='/' className="side-navbar-home">
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
}

export default SideNavbar;
