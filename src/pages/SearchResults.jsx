import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import data from '../data';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      // Filter the data based on the search term
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]); // Clear filtered data if search term is empty
    }
  }, [searchTerm]);

  return (
    <main>
      <h1>Search Results for "{searchTerm}"</h1>
      <div className="product-grid">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <ProductCard key={item.id} {...item} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </main>
  );
}

export default SearchResults;
