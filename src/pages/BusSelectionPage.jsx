import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const BusSelectionPage = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to the Bus List Page with state
    navigate('/bus-list', { state: { origin, destination, date } });
  };

  return (
    <div>
      <h2>Select Bus Origin and Destination</h2>
      <div>
        <label>Origin:</label>
        <input 
          type="text" 
          value={origin} 
          onChange={(e) => setOrigin(e.target.value)} 
          placeholder="Enter origin" 
        />
      </div>
      <div>
        <label>Destination:</label>
        <input 
          type="text" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)} 
          placeholder="Enter destination" 
        />
      </div>
      <div>
        <label>Date:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>
      <Button label="Search" onClick={handleSearch} />
    </div>
  );
};

export default BusSelectionPage;
