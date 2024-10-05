import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const SignInPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add sign-in logic here
    console.log('Signing in', { mobileNumber, password });
    navigate('/bus-selection'); // Navigate to bus selection page after sign in
  };

  return (
    <div>
      <h2>Sign In</h2>
      <InputField
        label="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Sign In" onClick={handleSignIn} />
      <p>
        <a href="/sign-up">Sign Up</a> | <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
};

export default SignInPage;
