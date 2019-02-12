import React from 'react';
import CategoryListItem from './CategoryListItem';

const CategoryList = (props) => {
  return (
    <nav id="sub-navigation">
      <ul className="ui list">
        {props.categories.map(cat => <CategoryListItem key={cat.id} category={cat} selectCategory={props.selectCategory} />)}

      </ul>
    </nav>
  )
}

export default CategoryList;
