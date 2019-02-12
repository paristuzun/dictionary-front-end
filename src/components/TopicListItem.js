import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = (props) => {
  return (
    <li>
    <Link to={`/topics/${props.topic.id}`} className="item">
      <div className="content">
        {props.topic.title}
      </div>
    </Link>
    </li>

  )
}

export default TopicListItem;
