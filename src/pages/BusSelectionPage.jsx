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
    <div className="w-full min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-600">Moni Bus</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="text-cyan-600 font-semibold">Bus</li>
              <li className="text-gray-600">Trains</li>
              <li className="text-gray-600">Hotels</li>
              <li className="text-gray-600">Offers</li>
              <li className="text-gray-600">Refer A Friend</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex space-x-2 text-gray-500">
            <li>Home</li>
            <li>&gt;</li>
            <li>City Directory</li>
            <li>&gt;</li>
            <li>Chennai Bus Tickets</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-2">Tamil Nadu Bus</h2>
        <p className="text-gray-600 mb-6">Search Tamil Nadu Bus Tickets</p>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm font-bold mb-2">Origin:</label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Enter origin"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm font-bold mb-2">Destination:</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <Button label="Search" onClick={handleSearch} className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition duration-300" />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-cyan-600 mb-4">Popular Routes to Tamil Nadu</h3>
          <p className="text-gray-600 mb-2">
            At Moni Bus, you can find the most popular bus routes to TamilNadu from various destinations. We provided a bus route search option on the website and it is easy to search various bus routes to Chennai.
          </p>
          <p className="text-gray-600">
            You can compare types of buses, fares and availability of bus timings from SRTC buses and private travel services. You can choose the buses of your choice, comfort and book your Chennai bus ticket. Enjoy safe, comfortable travel by booking bus tickets on Moni Bus.com.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BusSelectionPage;