import React from 'react';

export default function InputField({ label, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
}
