import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopicListItem from './TopicListItem';
import TopicCard from './TopicCard';

// export default class TopicList extends Component {
//
//   generateCards() {
// 		return this.props.topics.map(c => <TopicCard key={t.id} topic={t} />);
// 	}
//
//   render() {
//     return <div className="ui cards">{this.generateCards()}</div>;
//     <div className={`ui card ${props.width} wide column`}>
//     Topic List
//     <span to="/topics/new" className="item">
//       <div className="content">
//         <Link to="/topics/new" className="header">
//           Contribute
//         </Link>
//       </div>
//     </span>
//       <div className="ui list">
//         {props.topics.map(x => <TopicListItem key={x.id} topic={x} selectTopic={props.selectTopic} />)}
//
//       </div>
//     </div>
//   }

  export default class TopicList extends Component {
  	generateCards() {
  		return this.props.topics.map(t => <TopicCard key={t.id} topic={t} />);
  	}

  	render() {

  		return <div className="ui cards">{this.generateCards()}</div>;
  	}
  }
