import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BusList from '../components/BusList';
import { BusContext } from '../contexts/BusContext';
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

const HomePage = () => {
  const navigate = useNavigate();
  const { setSelectedBus } = useContext(BusContext);

  // Sample coordinates for live location (you can replace it with real-time data)
  const liveLocation = [13.0827, 80.2707]; // Example coordinates (Chennai)

  const handleBook = (busId) => {
    setSelectedBus(busId);
    navigate(`/booking/${busId}`);
  };

  return (
    <div>
      <h2>Available Buses</h2>
      <BusList onBook={handleBook} />

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
    </div>
  );
};

export default HomePage;
