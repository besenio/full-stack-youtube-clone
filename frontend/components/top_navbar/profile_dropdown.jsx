import React from 'react';
import { Link } from 'react-router-dom';

class ProfileDropdown extends React.Component {
   constructor(props) {
      super(props);

      this.handleOutClick = this.handleOutClick.bind(this);
   }

   componentDidMount() {
      document.addEventListener('click', this.handleOutClick, false);
   }

   componentWillUnmount() {
      document.addEventListener('click', this.handleOutClick, false);
   }

   handleOutClick(e) {
      let userIcon = document.getElementsByClassName('dropdown-greeting')[0];
      let dropdown = document.getElementsByClassName('dropdown')[0];

      if (this.props.showDropdown && !userIcon.contains(e.target) && !dropdown.contains(e.target)) {
         this.props.handleDropdown();
      };
   }

   render() {

      let show;
      if (this.props.showDropdown) {
         show = "";
      } else {
         show = "hidden";
      };

      return (
         <div className={`dropdown ${show}`}>
            <div className="dropdown-greeting">{this.props.currentUser.username[0].toUpperCase()}</div>
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
