import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

   const loggedIn = localStorage.token ? true : false;

  return (
    <div id="top-navigation" itemType="http://schema.org/SiteNavigationElement">
    { loggedIn ?

      <a href="/" className="item" onClick={props.logout}>Logout</a> :
      <Link to="/login" className="item">
        Login
      </Link>
    }
    <ul>
    <li className="not-mobile">
     <a href="/profile" title={props.username}>
     <img className="eksico" alt="profile icon"></img>
     me
     </a>
    </li>
    <li className="messages not-mobile">
     <a href="/message">
     <img className="eksico" alt="message icon"></img>
     message
     </a>
    </li>
    <li id="options-dropdown" className="dropdown">
       <a href="#" className="dropdown-toggle toggles" title="options">
          <svg className="eksico">

          </svg>
        </a>
        <ul className="dropdown-menu toggles-menu">
            <li><a href="/settings/options">settings</a></li>
            <li><a href="/follow-blocked">follow/blocked</a></li>
            <li className="separated"><a href="/logout">logout</a></li>
            <li className="separated"></li>
        </ul>
     <img className="eksico" alt="profile icon" ></img>
     message
    </li>
    </ul>
    <div style={{clear:'both'}}></div>
</div>



)

}

export default Navbar
