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
      document.removeEventListener('click', this.handleOutClick, false);
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
      }

      return (
         <div className={`dropdown ${show}`}>
            <div className="dropdown-user-info">
               <div>
                  <i className="fas fa-user-circle"></i>
               </div>
               <div>
                  <div className="dropdown-user-info-username">
                     {this.props.currentUser.username}
                  </div>
                  <div>
                     {this.props.currentUser.email}
                  </div>
               </div>
            </div>

            <div className="dropdown-github">
               <a href="https://github.com/besenio" className="side-navbar-github">
                  <i className="fab fa-github"></i>
                  <div>Github</div>
               </a>
            </div>

            <div className="dropdown-linkedin">
               <a href="https://www.linkedin.com/in/kevin-besenio/" className="side-navbar-linkedin">
                  <i className="fab fa-linkedin"></i>
                  <div>LinkedIn</div>
               </a>
            </div>

            <div className="dropdown-angellist">
               <a href="https://angel.co/u/besenio" className="side-navbar-angellist">
                  <i className="fab fa-angellist"></i>
                  <div>AngelList</div>
               </a>
            </div>

            <div>
               <Link className="drop-down-logout" to="/" onClick={() => this.props.logout()}>
                  <i className="fas fa-sign-out-alt"></i>
                  <div>Sign Out?</div>
               </Link>
            </div>
         </div>
      )
   }
}

export default ProfileDropdown;
