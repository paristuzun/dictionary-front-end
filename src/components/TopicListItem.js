import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = (props) => {
  return (
    <div className="topic item">
    <Link to={`/topics/${props.topic.slug}`} className="item">
      <div className="content">
        {props.topic.title}
      </div>
    </Link>
    </div>

  )
}

export default TopicListItem;
