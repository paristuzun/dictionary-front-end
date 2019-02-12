import React from 'react';
import Search from './Search'
import Navbar from './Navbar'
import CategoryList from './CategoryList'

class Header extends React.Component {

state = {
  categories: []
}

componentDidMount() {
  fetch('http://localhost:3000/categories')
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
    <Navbar />
     <CategoryList
       width="five"
       categories={this.state.categories}
       selectCategory={this.selectCategory}
     />
  </div>
  )
}

}

export default Header;
