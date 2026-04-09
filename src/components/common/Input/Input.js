import React from 'react';

const Input = ({ label, required, hideAsterisk, className = '', ...props }) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label>
          {label}
          {required && !hideAsterisk && <span className="asterisk">*</span>}
        </label>
      )}
      <input required={required} {...props} />
    </div>
  );
};

export default Input;
