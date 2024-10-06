// src/pages/UserDetailPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const UserDetailPage = () => {
  const location = useLocation();
  const { bus, selectedSeats } = location.state;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log('User Details', { name, email, mobileNumber, age, gender });
    navigate('/payment', { state: { bus, selectedSeats, userDetails: { name, email, mobileNumber, age, gender } } });
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full sm:w-auto shadow-lg rounded-xl bg-white p-4">
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-700 text-center">User Details for Booking</h1>
          <div className="w-full my-4">
            <InputField
              label="Name : "
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name : "
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            />
          </div>
          <div className="w-full my-4">
            <InputField
              label="Email : "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            />
          </div>
          <div className="w-full my-4">
            <InputField
              label="Mobile Number : "
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            />
          </div>
          <div className="w-full my-4">
            <InputField
              label="Age : "
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            />
          </div>
          <div className="w-full my-4">
            <label className="block text-gray-700">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg text-gray-700 focus:ring focus:outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </header>
        <footer className="mt-6 p-4">
          <Button label="Confirm Booking" onClick={handleConfirm} />
        </footer>
      </div>
    </div>
  );
};

export default UserDetailPage;
