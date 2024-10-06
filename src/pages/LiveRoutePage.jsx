// src/pages/LiveRoutePage.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LiveRoutePage = () => {
  const chennai = [13.0827, 80.2707]; // Correct Chennai coordinates
  const pondicherry = [11.9130, 79.7400]; // Pondicherry coordinates

  const positions = [chennai, pondicherry]; // Array of positions for the route

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-gray-900">Live Bus Route</h2>
      <p className="mb-4 text-center md:text-left">Your bus is on the way! Track the live location here. 🚌</p>

      <MapContainer
        center={chennai}
        zoom={10}
        style={{ height: "300px", width: "100%", maxWidth: "800px" }} // Adjust to screen size
        className="rounded-lg shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={chennai}>
          <Popup>Chennai</Popup>
        </Marker>
        <Marker position={pondicherry}>
          <Popup>Pondicherry</Popup>
        </Marker>
        <Polyline positions={positions} color="blue" />
      </MapContainer>
    </div>
  );
};

export default LiveRoutePage;
