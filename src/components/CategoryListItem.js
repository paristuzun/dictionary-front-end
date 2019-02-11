import React from 'react';
import { Link } from 'react-router-dom';

const CategoryListItem = (props) => {
  return (
    <li>
    <Link to={`/categories/${props.category.name}`} className="item">
      <div className="content">
        {props.category.name}
      </div>
    </Link>
    </li>
  )
}

export default CategoryListItem;
