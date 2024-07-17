import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartContext } from '../components/ShoppingCartContext';
import './ShoppingCart.css';

function ShoppingCart() {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const getTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + (Number(item.price) || 0), 0)
      .toFixed(2);
  };

  const totalAmount = getTotalAmount();
  const postage = cartItems.length === 0 ? 0 : (totalAmount > 50 ? 0 : 5); // Free postage if total is greater than €50, and zero if no items
  const finalAmount = (parseFloat(totalAmount) + postage).toFixed(2);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">Your cart is empty.</div>
      ) : (
        <div className="cart-content">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div>
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">${item.price}</p>
                  </div>
                  <button className="cart-item-remove" onClick={() => handleRemove(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <p>Total Items: {cartItems.length}</p>
              <p>Total: ${totalAmount}</p>
              <p>Postage: {postage === 0 ? 'Free' : `€${postage.toFixed(2)}`}</p>
              <p className="final-amount">Final Amount: €{finalAmount}</p>
            </div>
            <Link to="/payment">
              <button className="proceed-to-payment">Proceed to Payment</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;

