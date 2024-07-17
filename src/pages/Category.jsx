import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import data from '../data';

function Category() {
  const { type } = useParams();
  const filteredData = data.filter(item => item.category === type);

  return (
    <main>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
      <div className="product-grid">
        {filteredData.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Category;