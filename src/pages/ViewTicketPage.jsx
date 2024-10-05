// src/pages/ViewTicketPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Create a default icon for the marker
const DefaultIcon = L.icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ViewTicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use the navigate hook
  const { bus, selectedSeats, userDetails } = location.state;

  // Sample coordinates for live location (you can replace it with real-time data)
  const liveLocation = [13.0827, 80.2707]; // Chennai coordinates as an example

  const handleLiveRouteClick = () => {
    navigate('/live-route', { state: { bus } }); // Navigate to Live Route Page
  };

  return (
    <div>
      <h2>View Ticket</h2>
      <h3>Passenger Information</h3>
      <p>Name: {userDetails.name}</p>
      <p>Age: {userDetails.age}</p>
      <p>Gender: {userDetails.gender}</p>

      <h3>Bus Information</h3>
      <p>Bus Name: {bus.name}</p>
      <p>Bus Number: {bus.busNumber}</p>
      <p>Departure Location: {bus.origin}</p>
      <p>Destination: {bus.destination}</p>

      <h3>Journey Details</h3>
      <p>Departure Date: {bus.date}</p>
      <p>Departure Time: {bus.departureTime}</p>
      <p>Arrival Time: {bus.arrivalTime}</p>
      <p>Journey Duration: {bus.journeyDuration}</p>

      <h3>Seat Information</h3>
      <p>Seat Number(s): {selectedSeats.join(', ')}</p>

      <h3>Payment Information</h3>
      <p>Ticket Price: ₹{bus.price}</p>
      <p>Payment Status: Paid</p>

      <h3>Live Bus Route</h3>
      <MapContainer center={liveLocation} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={liveLocation}>
          <Popup>
            Live location of your bus!
          </Popup>
        </Marker>
      </MapContainer>

      {/* Button to navigate to Live Route Page */}
      <button onClick={handleLiveRouteClick}>Live Location</button>
    </div>
  );
};

export default ViewTicketPage;
