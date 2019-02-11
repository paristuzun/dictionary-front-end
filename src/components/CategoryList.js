import React from 'react';
import CategoryListItem from './CategoryListItem';

const CategoryList = (props) => {
  return (
    <div className={`ui ${props.width} wide column`}>
      <ul className="ui list">
        {props.categories.map(cat => <CategoryListItem key={cat.id} category={cat} selectCategory={props.selectCategory} />)}

      </ul>
    </div>
  )
}

export default CategoryList;
