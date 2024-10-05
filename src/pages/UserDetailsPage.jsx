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
    <body className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
      <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
        <section className="bg-cream-lighter p-4 shadow">
          <div className="md:flex">
            <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">User Details for Booking Seats</h2>
          </div>
          <form>
            <div className="md:flex mb-8">
              <div className="md:w-1/3">
                <legend className="uppercase tracking-wide text-sm">Personal Information</legend>
              </div>
              <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                <div className="mb-4">
                  <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                  <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                  <InputField label="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                </div>
                <div className="mb-4">
                  <InputField label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Gender</label>
                  <select className="w-full shadow-inner p-4 border-0" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
              <div className="md:flex-1 px-3 text-center md:text-right">
                <input
                  className="button text-cream-lighter bg-brick hover:bg-brick-dark"
                  type="button"
                  value="Confirm Booking"
                  onClick={handleConfirm}
                />
              </div>
            </div>
          </form>
        </section>
      </main>
    </body>
  );
};

export default UserDetailPage;
