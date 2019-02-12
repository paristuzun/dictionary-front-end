import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  return (
    <li>
    <Link to={`/profile/${props.user.id}`}>
      <div className="content">
        {props.user.username}
        {props.user.entries}
      </div>
    </Link>
    </li>
  )
}

export default Profile;
