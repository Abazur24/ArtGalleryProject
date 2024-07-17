import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import { ShoppingCartContext } from './ShoppingCartContext';

function Navbar() {
  const { cartItems } = useContext(ShoppingCartContext);
  const itemCount = cartItems.length;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
    if (window.innerWidth >= 640) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul className={isMobile ? 'mobile-nav' : ''}>
        <li><NavLink exact to="/" activeClassName="active">Gallery</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        {isMobile ? (
          <>
            <li className="dropdown">
              <button onClick={toggleDropdown} className="dropdown-toggle">
                Categories <FontAwesomeIcon icon={isDropdownOpen ? faTimes : faBars} />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/category/Living Room & Bedroom" activeClassName="active">Living Room & Bedroom</NavLink></li>
                  <li><NavLink to="/category/Kitchen & Bathroom" activeClassName="active">Kitchen & Bathroom</NavLink></li>
                  <li><NavLink to="/category/Perfume & Beauty" activeClassName="active">Perfume & Beauty</NavLink></li>
                  <li><NavLink to="/category/Collectable Toys & Games" activeClassName="active">Collectable Toys and Games</NavLink></li>
                  <li><NavLink to="/category/Wall Art & Decor" activeClassName="active">Wall Art & Decor</NavLink></li>
                  <li><NavLink to="/category/Prints" activeClassName="active">Prints</NavLink></li>
                  <li><NavLink to="/category/Electricals" activeClassName="active">Electricals</NavLink></li>
                </ul>
              )}
            </li>
          </>
        ) : (
          <>
            <li><NavLink to="/category/Living Room & Bedroom" activeClassName="active">Living Room & Bedroom</NavLink></li>
            <li><NavLink to="/category/Kitchen & Bathroom" activeClassName="active">Kitchen & Bathroom</NavLink></li>
            <li><NavLink to="/category/Perfume & Beauty" activeClassName="active">Perfume & Beauty</NavLink></li>
            <li><NavLink to="/category/Collectable Toys & Games" activeClassName="active">Collectable Toys and Games</NavLink></li>
            <li><NavLink to="/category/Wall Art & Decor" activeClassName="active">Wall Art & Decor</NavLink></li>
            <li><NavLink to="/category/Prints" activeClassName="active">Prints</NavLink></li>
            <li><NavLink to="/category/Electricals" activeClassName="active">Electricals</NavLink></li>
          </>
        )}
        <li className="cart-icon">
          <NavLink to="/cart" activeClassName="active">
            <FontAwesomeIcon icon={faShoppingCart} />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


