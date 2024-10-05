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
    // Add user detail confirmation logic here
    console.log('User Details', { name, email, mobileNumber, age, gender });
    navigate('/payment', { state: { bus, selectedSeats, userDetails: { name, email, mobileNumber, age, gender } } });
  };

  return (
    <div>
      <h2>User Details for Booking Seats</h2>
      <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      <InputField label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <Button label="Confirm Booking" onClick={handleConfirm} />
    </div>
  );
};

export default UserDetailPage;
