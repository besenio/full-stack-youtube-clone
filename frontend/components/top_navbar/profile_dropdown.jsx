import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const profileDropdown = (props) => {
   useEffect(() => {
      document.addEventListener('click', handleOutClick, false);

      return () => {
         document.removeEventListener('click', handleOutClick, false);
      }
   }, [props.showDropdown]);

   const handleOutClick = (e) => {
      let userIcon = document.getElementsByClassName('dropdown-greeting')[0];
      let dropdown = document.getElementsByClassName('dropdown')[0];

      if (props.showDropdown && !userIcon.contains(e.currentTarget) && !dropdown.contains(e.currentTarget)) {
         props.handleDropdown();
      }
   }

   let show;
   if (props.showDropdown) {
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
                  {props.currentUser.username}
               </div>
               <div>
                  {props.currentUser.email}
               </div>
            </div>
         </div>

         <div className="dropdown-github">
            <a href="https://github.com/besenio" target="_" className="side-navbar-github">
               <i className="fab fa-github"></i>
               <div>Github</div>
            </a>
         </div>

         <div className="dropdown-linkedin">
            <a href="https://www.linkedin.com/in/kevin-besenio/" target="_" className="side-navbar-linkedin">
               <i className="fab fa-linkedin"></i>
               <div>LinkedIn</div>
            </a>
         </div>

         <div className="dropdown-angellist">
            <a href="https://angel.co/u/besenio" target="_" className="side-navbar-angellist">
               <i className="fab fa-angellist"></i>
               <div>AngelList</div>
            </a>
         </div>

         <div>
            <Link className="drop-down-logout" to="/" onClick={() => props.logout()}>
               <i className="fas fa-sign-out-alt"></i>
               <div>Sign Out?</div>
            </Link>
         </div>
      </div>
   )
}

export default profileDropdown;