import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate(); // Changed from useHistory to useNavigate

  const handleSignUp = () => {
    navigate('/home'); // Updated to use navigate
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Button label="Sign Up" onClick={handleSignUp} />
    </div>
  );
}
