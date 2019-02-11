import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopicListItem from './TopicListItem';
import TopicCard from './TopicCard';


  export default class TopicList extends Component {
  	generateCards() {
  		return this.props.topics.map(t => <TopicCard key={t.id} topic={t} />);
  	}

    generateTopics() {
      return this.props.topics.map(x => <TopicListItem key={x.id} topic={x} />);
    }

  	render() {

  		return <div className="ui cards">
      <div className={`ui card wide column`}>
          Topic List
          <span to="/topics/new" className="item">
            <div className="content">
              <Link to="/topics/new" className="header">
                Contribute
              </Link>
            </div>
          </span>
            <div className="ui list">
{this.generateTopics()}
            </div>
          </div>
      {this.generateCards()}</div>;
  	}
  }
