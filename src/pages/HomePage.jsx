import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BusList from '../components/BusList';
import { BusContext } from '../contexts/BusContext';

const HomePage = () => {
  const navigate = useNavigate(); // Correctly using useNavigate from react-router
  const { setSelectedBus } = useContext(BusContext); // This should not be undefined

  // Check if BusContext is available
  if (!setSelectedBus) {
    console.error("BusContext is not available. Ensure BusProvider is used.");
  }

  const handleBook = (busId) => {
    if (setSelectedBus) {
      setSelectedBus(busId);
      navigate(`/booking/${busId}`);
    } else {
      console.error("setSelectedBus is undefined.");
    }
  };

  return (
    <div>
      <h2>Available Buses</h2>
      <BusList onBook={handleBook} />
    </div>
  );
};

export default HomePage;
