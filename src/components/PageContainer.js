import React, { Component } from 'react';
import TopicList from './TopicList';
import TopicSpecs from './TopicSpecs'
import CategoryList from './CategoryList';
// import TopicContainer from './TopicContainer'
import { Route } from 'react-router-dom';
import { getTopics } from '../services/Backend'

export default class PageContainer extends Component {

	state = {
		categories: [],
    topics: []
  }

	componentDidMount() {
		 //fetch from the API
	    getTopics()
			.then(topics => this.setState({ topics }));
	}

	handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


	render = () => {
    return (
      <div className="ui container">
			 <CategoryList
         width="five"
         categories={this.state.categories}
         selectCategory={this.selectCategory}
       />
			<Route
					exact
					path="/"
					render={() => (
					<TopicList
						topics={this.state.topics}
						handleClick={this.setTargetTopic}
											/>
										)}
				/>
			<Route
					exact
					path="/topics/:id"
					render={renderProps => (
						<TopicSpecs
							{...renderProps}
		
										/>
									)}
								/>

		</div>
    )
  }
}
