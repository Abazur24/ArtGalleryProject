import React from 'react';
import ProductCard from '../components/ProductCard';
import data from '../data';

function Home() {
  return (
    <main>
      <div className="product-grid">
        {data.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Home;