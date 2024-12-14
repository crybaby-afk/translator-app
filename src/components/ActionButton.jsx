import React from 'react';
import './ActionButtons.css';

const ActionButtons = ({ onTranslate, onClear }) => {
  return (
    <div className="action-buttons">
      <button className="translate-btn" onClick={onTranslate}>
        Translate
      </button>
      <button className="clear-btn" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default ActionButtons;
