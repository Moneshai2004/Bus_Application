import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import busesData from '../constants/buses.json';

const BusListPage = () => {
  const location = useLocation();
  const { origin, destination, date } = location.state || {};
  const navigate = useNavigate();

  // Filter buses based on origin, destination, and date
  const filteredBuses = busesData.filter(bus =>
    bus.origin.toLowerCase() === origin.toLowerCase() &&
    bus.destination.toLowerCase() === destination.toLowerCase() &&
    bus.date === date
  );

  const handleBookNow = (bus) => {
    navigate('/seat-selection', { state: { bus } });
  };

  return (
    <div>
      <h2>Available Buses from {origin} to {destination} on {date}</h2>
      <ul>
        {filteredBuses.length > 0 ? (
          filteredBuses.map(bus => (
            <li key={bus.id}>
              <h4>{bus.name}</h4>
              <p>{`Bus Number: ${bus.busNumber}`}</p>
              <p>{`Departure Time: ${bus.departureTime}`}</p>
              <p>{`Arrival Time: ${bus.arrivalTime}`}</p>
              <p>{`Duration: ${bus.journeyDuration}`}</p>
              <p>{`Available Seats: ${bus.availableSeats}`}</p>
              <p>{`Ticket Price: ₹${bus.price}`}</p>
              <p>{`Bus Type: ${bus.busType}`}</p>
              <p>{`Rating: ${bus.rating} ⭐`}</p>
              <Button label="Book Now" onClick={() => handleBookNow(bus)} />
            </li>
          ))
        ) : (
          <p>No buses available for this route on the selected date.</p>
        )}
      </ul>
    </div>
  );
};

export default BusListPage;
