import React from 'react';

export default function Button({ label, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
}
