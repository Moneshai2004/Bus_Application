// src/components/DatePicker.jsx
import React from 'react';

const DatePicker = ({ selectedDate, onChange }) => {
  const handleChange = (e) => {
    onChange(new Date(e.target.value)); // Update to Date object
  };

  return (
    <div>
      <label>Select Date:</label>
      <input 
        type="date" 
        value={selectedDate.toISOString().split('T')[0]} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default DatePicker;
