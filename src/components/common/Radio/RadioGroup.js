import React from 'react';

const RadioGroup = ({ label, options, name, selectedValue, onChange, required, className = '' }) => {
  return (
    <div className={`radio-group ${className}`}>
      {label && (
        <span className="radio-group-label">
          {label}
          {required && <span className="asterisk">*</span>}
        </span>
      )}
      <div className="radio-options">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input 
              type="radio" 
              name={name} 
              value={option.value} 
              className="radio-input"
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
            /> {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
