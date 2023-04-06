import React, { useState } from 'react';

function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  function formatPhoneNumber(input) {
    // Strip all non-numeric characters from the input
    let cleaned = ('' + input).replace(/\D/g, '');

    // Add the parenthesis and hyphen as needed
    let formatted = '';
    if (cleaned.length > 0) {
      formatted += '(' + cleaned.substring(0, 3) + ')';
    }
    if (cleaned.length >= 4) {
      formatted += cleaned.substring(3, 6) + '-';
    }
    if (cleaned.length >= 7) {
      formatted += cleaned.substring(6, 10);
    }
    return formatted;
  }

  function handleChange(event) {
    setPhoneNumber(formatPhoneNumber(event.target.value));
  }

  return (
    <div >
        <input style={{width: '100%',height: '131px',fontSize: '50px',backgroundColor: 'gray'}}
      type="tel"
      pattern="[0-9]*"
      maxLength="14"
      value={phoneNumber}
      onChange={handleChange}
    />
    </div>
  );
}

export default PhoneInput;

