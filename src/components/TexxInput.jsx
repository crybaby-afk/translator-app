import React from 'react';
import './TextInput.css';

const TextInput = ({ value, onChange }) => {
  return (
    <div className="input-section">
      <textarea
        className="text-input"
        value={value}
        onChange={onChange}
        placeholder="Enter text..."
      />
    </div>
  );
};

export default TextInput;
