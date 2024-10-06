// src/pages/ViewTicketPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewTicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, selectedSeats, userDetails } = location.state;

  const handleDownload = () => {
    const ticketDetails = `
      Ticket Details:
      Name: ${userDetails.name}
      Age: ${userDetails.age}
      Gender: ${userDetails.gender}
      Bus Name: ${bus.name}
      Bus Number: ${bus.busNumber}
      Departure Location: ${bus.origin}
      Destination: ${bus.destination}
      Departure Date: ${bus.date}
      Departure Time: ${bus.departureTime}
      Arrival Time: ${bus.arrivalTime}
      Journey Duration: ${bus.journeyDuration}
      Seat Number(s): ${selectedSeats.join(', ')}
      Ticket Price: ₹${bus.price}
      Payment Status: Paid
    `;
    
    const blob = new Blob([ticketDetails], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket_details.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleLiveLocation = () => {
    navigate('/live-route');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Add a margin border with black color */}
      <div className="max-w-[1200px] mx-auto p-6 bg-white rounded-xl shadow-md border-4 border-black">
        <h2 className="text-3xl font-semibold mb-6 text-blue-gray-900">View Ticket</h2>

        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-blue-gray-900">Passenger Information</h3>
          <p className="text-gray-700 text-lg">Name: {userDetails.name}</p>
          <p className="text-gray-700 text-lg">Age: {userDetails.age}</p>
          <p className="text-gray-700 text-lg">Gender: {userDetails.gender}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-blue-gray-900">Bus Information</h3>
          <p className="text-gray-700 text-lg">Bus Name: {bus.name}</p>
          <p className="text-gray-700 text-lg">Bus Number: {bus.busNumber}</p>
          <p className="text-gray-700 text-lg">Departure Location: {bus.origin}</p>
          <p className="text-gray-700 text-lg">Destination: {bus.destination}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-blue-gray-900">Journey Details</h3>
          <p className="text-gray-700 text-lg">Departure Date: {bus.date}</p>
          <p className="text-gray-700 text-lg">Departure Time: {bus.departureTime}</p>
          <p className="text-gray-700 text-lg">Arrival Time: {bus.arrivalTime}</p>
          <p className="text-gray-700 text-lg">Journey Duration: {bus.journeyDuration}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-blue-gray-900">Seat Information</h3>
          <p className="text-gray-700 text-lg">Seat Number(s): {selectedSeats.join(', ')}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-blue-gray-900">Payment Information</h3>
          <p className="text-gray-700 text-lg">Ticket Price: ₹{bus.price}</p>
          <p className="text-gray-700 text-lg">Payment Status: Paid</p>
        </div>

        {/* Button to navigate back */}
        <button 
          className="mt-4 w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-all" 
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        {/* Button to download ticket details */}
        <button 
          className="mt-4 w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md transition-all" 
          onClick={handleDownload}
        >
          Download Ticket Details
        </button>

        {/* Button to view live location */}
        <button 
          className="mt-4 w-full px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition-all" 
          onClick={handleLiveLocation}
        >
          View Live Location
        </button>
      </div>
    </div>
  );
};

export default ViewTicketPage;
