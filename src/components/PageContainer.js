import React, { Component } from 'react';
import TopicList from './TopicList';
import TopicSpecs from './TopicSpecs'
import TopicContainer from './TopicContainer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import TopicForm from './TopicForm'
import TopicCard from './TopicCard'
import { getTopics } from '../services/Backend'

export default class PageContainer extends Component {

	state = {
		categories: [],
    topics: []
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

				<Route
						exact
						path="/"
						render={() => (
						<TopicContainer
							topics={this.state.topics}

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

								<Switch>
				          <Route path="/topics/new" render={() => (
				            localStorage.getItem("username") ? (
				              <TopicForm addTopic={this.addTopic} />
				            ) : <Redirect to="/login" />
				          )} />

				        </Switch>



</div>
</Router>

    )
  }
}

// return (
// 	<div className="ui grid container">
// 		<DogList
// 			width="six"
// 			dogs={this.state.dogs}
// 			selectDog={this.selectDog}
// 			toggleForm={this.showForm}
// 		/>
// 		<Switch>
// 			<Route path="/dogs/new" render={() => (
// 				localStorage.getItem("name") ? (
// 					<DogForm addDog={this.addDog} />
// 				) : <Redirect to="/login" />
// 			)} />
// 			<Route path="/dogs/:id" render={({ match }) => {
// 				let dogId = parseInt(match.params.id)
// 				let dog = this.state.dogs.find(dog => dog.id === dogId)
// 				return dog ? <DogDetail width="ten" dog={dog} /> : null;
// 			}} />
// 		</Switch>
// 	</div>
// )
