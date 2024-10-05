// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import BusSelectionPage from "./pages/BusSelectionPage";
import BusListPage from "./pages/BusListPage";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PaymentPage from "./pages/PaymentPage";
import BookedTicketsPage from "./pages/BookedTicketsPage";
import ViewTicketPage from "./pages/ViewTicketPage";
import HomePage from "./pages/HomePage"; // Import the Home Page
import LiveRoutePage from "./pages/LiveRoutePage"; // Import the Live Route Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />{" "}
        {/* Redirect root URL to Sign In page */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/bus-selection" element={<BusSelectionPage />} />
        <Route path="/bus-list" element={<BusListPage />} />
        <Route path="/seat-selection" element={<SeatSelectionPage />} />
        <Route path="/user-details" element={<UserDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/view-ticket" element={<ViewTicketPage />} />
        <Route path="/home" element={<HomePage />} /> {/* Add Home Page */}
        <Route path="/booked-tickets" element={<BookedTicketsPage />} />
        <Route path="/live-route" element={<LiveRoutePage />} />{" "}
        {/* Add Live Route Page */}
      </Routes>
    </Router>
  );
};

export default App;
