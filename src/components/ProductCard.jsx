import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartContext } from './ShoppingCartContext';

function ProductCard({ id, name, image, price }) {
  const { addToCart } = useContext(ShoppingCartContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const item = { id, name, image, price };
    addToCart(item);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const closeExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <div className={`product-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <img src={image} alt={name} />
      {!isExpanded && (
        <>
          <h3>{name}</h3>
          <p>{`€${price}`}</p>
          <button onClick={handleAddToCart}>Add to Shopping Cart</button>
        </>
      )}
      {isExpanded && (
        <div className="expanded-controls">
          <button onClick={handleAddToCart}>Add to Shopping Cart</button>
          <button onClick={closeExpanded}>Close</button>
        </div>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;