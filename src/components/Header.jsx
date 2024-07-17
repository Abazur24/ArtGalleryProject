import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
    }
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Mid-Century Haven</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;