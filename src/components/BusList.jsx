import React from 'react';
import buses from '../constants/buses.json';
import Button from './Button';

export default function BusList({ onBook }) {
  return (
    <ul className="bus-list">
      {buses.map((bus) => (
        <li key={bus.id}>
          {bus.name} - {bus.origin} to {bus.destination} - ₹{bus.price}
          <Button label="Book Now" onClick={() => onBook(bus.id)} />
        </li>
      ))}
    </ul>
  );
}
