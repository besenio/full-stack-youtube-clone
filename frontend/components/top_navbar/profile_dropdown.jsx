import React from 'react';
import { Link } from 'react-router-dom';

class ProfileDropdown extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="dropdown">
               <div className="dropdown-greeting" onClick={this.handleDropdown}>{this.props.currentUser.username[0].toUpperCase()}</div>
               <i class="fas fa-user-circle"></i>
               <div>
                  {this.props.currentUser.username}
               </div>
               <div>
                  {this.props.currentUser.email}
               </div>
               <a href="https://github.com/" className="side-navbar-github">
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
               </a>
               <Link className="drop-down-logout" to="/" onClick={() => this.props.logout()}>
                  <i className="fas fa-sign-out-alt"></i>
                  <div>Sign Out?</div>
               </Link>
            </div>
        )
    }
}

export default ProfileDropdown;
