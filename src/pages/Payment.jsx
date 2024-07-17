import React, { useState } from 'react';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', { paymentMethod, name, address, phone });
  };

  // Dummy total amount
  const totalAmount = 100; // Replace with actual total amount logic

  return (
    <>
      <div className='payment-container'>
        <h1 className='payment-h1'>Payment Page</h1>

        <div className='payment-method'>
          <p>Choose a payment method</p>
          <form>
            <label>
              <input
                type="radio"
                name="payment"
                value="credit-card"
                onChange={() => setPaymentMethod('Credit Card')}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                onChange={() => setPaymentMethod('PayPal')}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="ideal"
                onChange={() => setPaymentMethod('iDeal')}
              />
              iDeal
            </label>
          </form>
        </div>

        <div className='postage-details'>
          <p>Enter your postage details</p>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
              />
            </label>
            <button className='postage-button' type="submit">Submit</button>
          </form>
        </div>

        <div className="total-amount">
          <p>Total Amount to Pay: €{totalAmount.toFixed(2)}</p>
        </div>

      </div>
    </>
  );
}

export default Payment;