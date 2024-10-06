import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';

const SeatSelectionPage = () => {
  const location = useLocation();
  const { bus } = location.state;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalPrice = selectedSeats.length * bus.price;
  const navigate = useNavigate();

  // Dummy data for available, booked, female-only seats, etc. with 40 seats
  const seats = {
    upper: [
      { number: 'UD1', status: 'available', type: 'sleeper' },
      { number: 'UD2', status: 'female', type: 'sleeper' },
      { number: 'UD3', status: 'available', type: 'sleeper' },
      { number: 'UD4', status: 'booked', type: 'sleeper' },
      { number: 'UD5', status: 'available', type: 'sleeper' },
      { number: 'UD6', status: 'booked', type: 'sleeper' },
      { number: 'UD7', status: 'available', type: 'sleeper' },
      { number: 'UD8', status: 'available', type: 'sleeper' },
      { number: 'UD9', status: 'booked', type: 'sleeper' },
      { number: 'UD10', status: 'available', type: 'sleeper' },
    ],
    lower: [
      { number: 'D1', status: 'available', type: 'sleeper' },
      { number: 'D2', status: 'male', type: 'sleeper' },
      { number: 'D3', status: 'available', type: 'sleeper' },
      { number: 'D4', status: 'booked', type: 'sleeper' },
      { number: 'D5', status: 'booked', type: 'sleeper' },
      { number: 'D6', status: 'available', type: 'sleeper' },
      { number: 'D7', status: 'available', type: 'sleeper' },
      { number: 'D8', status: 'booked', type: 'sleeper' },
      { number: 'D9', status: 'available', type: 'sleeper' },
      { number: 'D10', status: 'available', type: 'sleeper' },
    ],
  };

  const handleSelectSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleContinue = () => {
    navigate('/user-details', { state: { bus, selectedSeats } });
  };

  // Render seat grid with different styles for seater and sleeper
  const renderSeats = (seatGroup) => (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
      {seatGroup.map((seat) => (
        <button
          key={seat.number}
          className={`p-2 rounded text-white
            ${selectedSeats.includes(seat.number) ? 'bg-blue-500' : 
              seat.status === 'available' ? 'bg-green-500' : 
              seat.status === 'booked' ? 'bg-red-600' :
              seat.status === 'female' ? 'bg-pink-400' :
              seat.status === 'male' ? 'bg-blue-300' : 'bg-gray-200'}
            h-12 w-12 sm:h-14 sm:w-14`}
          onClick={() => handleSelectSeat(seat.number)}
          disabled={seat.status === 'booked'}
        >
          {seat.number}
        </button>
      ))}
    </div>
  );

  // Filters state
  const [filters, setFilters] = useState([
    { label: 'Seater', checked: false },
    { label: 'AC', checked: false },
    { label: 'Sleeper', checked: false },
    { label: 'Refund', checked: false },
    { label: 'Rating', checked: false },
    { label: 'Charger', checked: false },
    { label: 'Break Time', checked: false },
  ]);

  const handleFilterChange = (label) => {
    setFilters(filters.map(filter => 
      filter.label === label ? { ...filter, checked: !filter.checked } : filter
    ));
  };

  // Main boarding points for Chennai to Pondicherry
  const boardingPoints = [
    'Koyambedu Election Commission Bus Stand',
    'Vadapalani Sivan Kovil',
    'Ashok Pillar Near KFC Restaurant',
    'T. Nagar Bus Stop',
    'Kotturpuram Bus Stop',
    'Adyar Bus Stop',
    'Thiruvanmiyur Bus Stop',
    'Ekkatuthangal Bus Stop',
    'Okkium Thoraipakkam',
    'Siruseri IT Park',
    'Kelambakkam Bus Stop',
    'Maraimalai Nagar Bus Stop',
    'Puducherry Bus Stand',
  ];

  // State to control sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col sm:flex-row">
      {/* Toggle Button for Sidebar */}
      <button
        className="mb-4 sm:hidden bg-blue-500 text-white p-2 rounded"
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Sidebar for filters and boarding points */}
      {isSidebarVisible && (
        <Sidebar 
          filters={filters} 
          onFilterChange={handleFilterChange} 
          boardingPoints={boardingPoints} 
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarVisible ? 'ml-0' : 'ml-0 sm:ml-6'}`}>
        <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Select Seats for {bus.name}</h2>

        <div className="flex flex-col sm:flex-row justify-center mb-6 space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Seat Price Filter */}
          <div className="flex flex-col space-y-2">
            <Button label="₹1200" className="bg-gray-200" />
            <Button label="₹1300" className="bg-gray-200" />
            <Button label="₹1350" className="bg-gray-200" />
          </div>

          {/* Upper and Lower Seat Layout */}
          <div className="flex-1">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-2">Upper Deck</h3>
              {renderSeats(seats.upper)}
            </div>
            <div className="mt-6 flex flex-col items-center">
              <h3 className="font-semibold mb-2">Lower Deck</h3>
              {renderSeats(seats.lower)}
            </div>
          </div>
        </div>

        {/* Total Price and Continue Button */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-center">Total Price: ₹{totalPrice}</p>
          <Button
            label="Select seats to continue"
            onClick={handleContinue}
            className="bg-blue-500 text-white mt-4 w-full"
            disabled={selectedSeats.length === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
