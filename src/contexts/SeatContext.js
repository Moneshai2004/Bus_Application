import React, { createContext, useState } from "react";

export const SeatContext = createContext();

export const SeatProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <SeatContext.Provider value={{ selectedSeats, setSelectedSeats }}>
      {children}
    </SeatContext.Provider>
  );
};
