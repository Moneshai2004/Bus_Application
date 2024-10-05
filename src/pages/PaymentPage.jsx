// src/pages/PaymentPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, selectedSeats, userDetails } = location.state;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [error, setError] = useState('');

  const handlePayment = () => {
    // Simulate payment processing here
    console.log('Payment details', { paymentMethod, cardholder, cardNumber, expiredMonth, expiredYear, securityCode });
    alert('Payment successful!');

    // Navigate to View Ticket Page after successful payment
    navigate('/view-ticket', { state: { bus, selectedSeats, userDetails } });
  };

  return (
    <div className="bg-blue-50 p-4">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-700 text-center">Card Payment</h1>
          <div className="flex flex-col justify-center items-center w-full my-4">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card holder"
              maxLength="22"
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full my-4">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 '))}
              maxLength="19"
            />
          </div>
          <div className="my-3 flex flex-col">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <select
                className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                value={expiredMonth}
                onChange={(e) => setExpiredMonth(e.target.value)}
              >
                <option value="" disabled>MM</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
                ))}
              </select>
              <select
                className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                value={expiredYear}
                onChange={(e) => setExpiredYear(e.target.value)}
              >
                <option value="" disabled>YY</option>
                {Array.from({ length: 6 }, (_, i) => (
                  <option key={i + 2024} value={String(i + 2024).slice(-2)}>{String(i + 2024).slice(-2)}</option>
                ))}
              </select>
              <input
                type="text"
                className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Security code"
                maxLength="3"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
            </div>
          </div>
        </header>
        <footer className="mt-6 p-4">
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="block w-full mb-4 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          >
            <option value="" disabled>Select Payment Method</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
          </select>
          {error && <p className="text-red-500">{error}</p>}
          <Button label="Confirm Payment" onClick={handlePayment} />
          <p className="mt-4 text-gray-500">Cancellation Policy: Please read our cancellation and refund policy.</p>
        </footer>
      </div>
    </div>
  );
};

export default PaymentPage;
