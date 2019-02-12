import React, { Component } from 'react';
import TopicCard from './TopicCard';

export default class TopicContainer extends Component {

  generateCards() {
    return this.props.topics.map(t => <TopicCard key={t.id} topic={t} />);
  }

  render = () => {
    return (
        <div id="main">
         <div id="content" className="instapaper-body" role="main">
           <section id="content-body">
              {this.generateCards()}
            </section>
        </div>
        </div>
    )
  }

}
