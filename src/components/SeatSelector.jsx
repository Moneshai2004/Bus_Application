import React, { useState, useEffect } from 'react';
import seatsData from '../constants/seats.json';

export default function SeatSelector({ busId, selectedSeats, setSelectedSeats }) {
  const [availableSeats, setAvailableSeats] = useState([]);

  useEffect(() => {
    const seatInfo = seatsData[busId];
    if (seatInfo) {
      setAvailableSeats(seatInfo.availableSeats);
    }
  }, [busId]);

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter((seat) => seat !== seatNumber)
        : [...prevSeats, seatNumber]
    );
  };

  return (
    <div>
      <h3>Available Seats:</h3>
      <div className="seat-selector">
        {availableSeats.map((seatNumber) => (
          <button
            key={seatNumber}
            className={selectedSeats.includes(seatNumber) ? 'seat selected' : 'seat'}
            onClick={() => handleSeatSelect(seatNumber)}
          >
            {seatNumber}
          </button>
        ))}
      </div>
    </div>
  );
}
