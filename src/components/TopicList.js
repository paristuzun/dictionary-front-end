import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopicListItem from './TopicListItem';


  export default class TopicList extends Component {

    generateTopics() {
      return this.props.topics.map(x => <TopicListItem key={x.id} topic={x} />);
    }

  	render() {

  		return <div id="index-section" className="main-left-frame">
       <nav id="partial-index" itemType="http://schema.org/SiteNavigationElement">
       <div className="clearfix dropdown ">
         <h2 title="topics">today</h2>
       </div>
       <div id="feed-info">
         <div id="feed-refresh-link" className="more-data">
          <span to="/topics/new" className="item">
            <Link to="/topics/new" className="header">
              Contribute +
           </Link>
         </span>
         </div>
       </div>
       <ul className="topic-list partial">
          {this.generateTopics()}
        </ul>
        </nav>
      </div>;
  	}
  }
