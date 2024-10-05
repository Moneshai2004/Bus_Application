import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SeatSelector from '../components/SeatSelector';
import Button from '../components/Button';
import { SeatContext } from '../contexts/SeatContext';

export default function BookingPage() {
  const { selectedSeats, setSelectedSeats } = useContext(SeatContext);
  const { busId } = useParams(); // Corrected to destructure busId
  const navigate = useNavigate(); // Changed from useHistory to useNavigate

  const handlePayment = () => {
    navigate('/payment'); // Updated to use navigate
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      <SeatSelector busId={busId} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <Button label="Proceed to Payment" onClick={handlePayment} />
    </div>
  );
}
