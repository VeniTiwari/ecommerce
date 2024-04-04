import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesPage() {
  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <ul>
        <li>
          <Link to="/category/1">Drawing Tools</Link>
        </li>
        <li>
          <Link to="/category/2">Painting Tools</Link>
        </li>
        <li>
          <Link to="/category/3">Sculpting Tools</Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoriesPage;
