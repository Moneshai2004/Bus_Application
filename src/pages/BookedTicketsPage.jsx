import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const BookedTicketsPage = () => {
  const navigate = useNavigate();

  const handleViewTicket = () => {
    // Navigate to ticket details if necessary
    alert("Viewing booked ticket");
  };

  return (
    <div>
      <h2>Your Booked Tickets</h2>
      {/* Render booked tickets here */}
      <Button label="View Ticket" onClick={handleViewTicket} />
    </div>
  );
};

export default BookedTicketsPage;
