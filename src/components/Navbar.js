import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <div>


{ props.user ?
  <a href="/" className="item" onClick={props.logout}>Logout</a> :
  <Link to="/login" className="item">
    Login
  </Link>
}

</div>
)
}

export default Navbar
