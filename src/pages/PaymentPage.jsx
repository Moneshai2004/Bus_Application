// PaymentPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, selectedSeats, userDetails } = location.state;
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [error, setError] = useState('');

  const handlePayment = () => {
    // Simulate payment processing here
    console.log('Payment details', { paymentMethod, cardNumber, expiryDate, cvv, billingAddress });
    alert('Payment successful!');

    // Navigate to View Ticket Page after successful payment
    navigate('/view-ticket', { state: { bus, selectedSeats, userDetails } });
  };

  return (
    <div>
      <h2>Payment Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="" disabled>Select Payment Method</option>
        <option value="Credit/Debit Card">Credit/Debit Card</option>
        <option value="UPI">UPI</option>
        <option value="Net Banking">Net Banking</option>
      </select>
      <InputField 
        label="Card Number" 
        value={cardNumber} 
        onChange={(e) => setCardNumber(e.target.value)} 
        placeholder="1234 5678 9012 3456"
      />
      <InputField 
        label="Expiry Date" 
        value={expiryDate} 
        onChange={(e) => setExpiryDate(e.target.value)} 
        placeholder="MM/YY"
      />
      <InputField 
        label="CVV" 
        type="password" 
        value={cvv} 
        onChange={(e) => setCvv(e.target.value)} 
        placeholder="123"
      />
      <InputField 
        label="Billing Address" 
        value={billingAddress} 
        onChange={(e) => setBillingAddress(e.target.value)} 
      />
      <Button label="Confirm Payment" onClick={handlePayment} />
      <p>Cancellation Policy: Please read our cancellation and refund policy.</p>
    </div>
  );
};

export default PaymentPage;
