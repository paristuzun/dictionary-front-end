import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {

  return (
    <footer id="site-footer">
     <ul>
     <li>
  <Link to="/contact" className="item">
    Contact
  </Link>
  </li>
  </ul>
</footer>
)
}

export default Footer
