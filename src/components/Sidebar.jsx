// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ filters, onFilterChange, boardingPoints }) => {
  return (
    <div className="w-60 bg-white p-4 shadow-md rounded-md overflow-y-auto h-full">
      <h3 className="font-semibold mb-2">Filters</h3>
      <div className="flex flex-col space-y-2">
        {filters.map((filter) => (
          <label key={filter.label} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={filter.checked}
              onChange={() => onFilterChange(filter.label)}
            />
            <span>{filter.label}</span>
          </label>
        ))}
      </div>

      {/* Add margin to create space between filters and boarding points */}
      <div className="my-4 mt-8"> {/* Adjust margin as needed */}
        <h3 className="font-semibold mb-2">Boarding Points</h3>
        <div className="max-h-40 overflow-y-scroll">
          <ul className="flex flex-col space-y-2">
            {boardingPoints.map((point, index) => (
              <li key={index} className="cursor-pointer hover:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
