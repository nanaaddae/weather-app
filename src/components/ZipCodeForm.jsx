import React, { useState } from 'react';

const ZipCodeForm = ({ onFormSubmit }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (zipCode.trim() !== '') {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT/${zipCode}`);
        const data = await response.json();
        onFormSubmit(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle the error appropriately
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Zip Code:
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default ZipCodeForm;
