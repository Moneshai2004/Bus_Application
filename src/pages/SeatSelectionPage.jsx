import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const SeatSelectionPage = () => {
  const location = useLocation();
  const { bus } = location.state;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalPrice = selectedSeats.length * bus.price; // Calculate total price
  const navigate = useNavigate();

  const handleSelectSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleContinue = () => {
    navigate('/user-details', { state: { bus, selectedSeats } });
  };

  return (
    <div>
      <h2>Select Seats for {bus.name}</h2>
      <div>
        <p>{`Total Price: ₹${totalPrice}`}</p>
        {/* Assuming seats are numbecyan from 1 to 10 */}
        {Array.from({ length: 10 }, (_, index) => (
          <Button 
            key={index + 1} 
            label={`Seat ${index + 1}`} 
            onClick={() => handleSelectSeat(index + 1)} 
            style={{ background: selectedSeats.includes(index + 1) ? 'green' : 'gray' }}
          />
        ))}
      </div>
      <Button label="Continue" onClick={handleContinue} />
    </div>
  );
};

export default SeatSelectionPage;
