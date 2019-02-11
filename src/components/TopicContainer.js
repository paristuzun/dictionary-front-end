import React from 'react';
import { Link } from 'react-router-dom';
import TopicCard from './TopicCard';

const TopicContainer = (props) => {
  return (
    <div className={`ui card ten wide column`}>
      <div className="ui list">
        {props.topics.map(x => <TopicCard key={x.id} topic={x} selectTopic={props.selectTopic} />)}

      </div>
    </div>
  )
}

export default TopicContainer;
