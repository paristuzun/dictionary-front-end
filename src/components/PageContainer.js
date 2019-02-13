import React, { Component } from 'react';
import TopicList from './TopicList';
import TopicSpecs from './TopicSpecs'
import TopicContainer from './TopicContainer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import TopicForm from './TopicForm'
import TopicCard from './TopicCard'
import Profile from './Profile'
import { getTopics } from '../services/Backend'

export default class PageContainer extends Component {

	state = {
		categories: [],
    topics: [],
		entries: []
  }

	componentDidMount() {
	    getTopics()
			.then(topics => this.setState({ topics }));
	}

	addTopic = (topic) => {
    let newTopic = this.state.topics.concat(topic)
    this.setState({ topics: newTopic })
  }

	handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

	generateCards() {
    return this.props.topics.map(t => <TopicCard key={t.id} topic={t} />);
  }


	render = () => {
    return (
			<Router>
      <div className="container">
			<Switch>
			<Route
					exact
					path="/category/:id"
					render={() => (
					<TopicList
						topics={this.topic.categories}
						toggleForm={this.showForm}
					 />
					)}
				/>
				<Route
						exact
						path="/"
						render={() => (
						<TopicList
							topics={this.state.topics}
							toggleForm={this.showForm}
						 />
						)}
					/>
				</Switch>
        <Route exact path="/profile" component={Profile} />
				<Route
						exact
						path="/"
						render={() => (
						<TopicContainer
							topics={this.state.topics}

						 />
						)}
					/>

					<Switch>
				    <Route path="/topics/new" render={(props) => (
				      localStorage.getItem("username") ? (
				      <TopicForm routeProps={props} addTopic={this.addTopic} />
				      ) : <Redirect to="/login" />
				    )} />
					<Route
											exact
											path="/topics/:id"
											render={renderProps => (
												<TopicSpecs
													{...renderProps}

																/>
															)}
														/>

				        </Switch>



</div>
</Router>

    )
  }
}
