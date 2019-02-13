import React from 'react';
import Search from './Search'
import Navbar from './Navbar'
import CategoryList from './CategoryList'

class Header extends React.Component {

state = {
  categories: []
}

componentDidMount() {
  fetch('https://murmuring-scrubland-52560.herokuapp.com/categories')
    .then(res => res.json())
    .then(categories => this.setState({ categories }));
}


render = () => {
  return (
    <div id="top-bar">
     <div id="logo">
       <a href="/">Dictionary</a>
      </div>
    <Search />
    <Navbar logout={this.props.logout}/>
     {/*<CategoryList
       width="five"
       categories={this.state.categories}
       selectCategory={this.selectCategory}
     />*/}
  </div>
  )
}

}

export default Header;
