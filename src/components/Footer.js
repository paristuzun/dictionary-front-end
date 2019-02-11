import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {

  return (
    <div>
  <Link to="/about" className="item">
    About
  </Link>
  <Link to="/contact" className="item">
    Contact
  </Link>


</div>
)
}

export default Footer
