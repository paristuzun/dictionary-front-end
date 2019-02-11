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
    <div className="ui container">
    <Search />
    <Navbar />
    <h3>Categories:</h3>
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
