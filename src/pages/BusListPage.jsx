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
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{origin}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <span className="font-semibold">{destination}</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">{date}</span>
        </div>
        <button className="px-3 py-1 bg-gray-00 rounded">Modify</button>
      </div>

      <div className="mb-4">
        <span className="font-semibold">{filteredBuses.length} Buses</span> found
      </div>

      {filteredBuses.length > 0 ? (
        <ul className="space-y-6">
          {filteredBuses.map(bus => (
            <li 
              key={bus.id} 
              className="bg-gray-100 shadow rounded-lg p-6 transition transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{bus.name}</h3>
                  <span className="text-sm text-blue-600">{bus.busType} ({bus.busNumber})</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-lg">{bus.departureTime}</span>
                  <div className="text-sm text-gray-500">{bus.origin}</div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm">
                  <span>{bus.journeyDuration}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-lg">{bus.arrivalTime}</span>
                  <div className="text-sm text-gray-500">{bus.destination}</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{bus.rating} ★</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Starts from</div>
                  <div>
                    <span className="font-semibold text-lg">₹{bus.price}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div>{bus.availableSeats} Seats available</div>
                  <Button
                    label="Book Now"
                    onClick={() => handleBookNow(bus)}
                    className="bg-red-500 text-white px-4 py-1 rounded mt-2"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-600">
          No buses available for this route on the selected date.
        </p>
      )}
    </div>
  );
};

export default BusListPage;
