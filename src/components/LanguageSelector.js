import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ value, onChange, label }) => {
  return (
    <div className="language-selector">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;
