import React, { useState } from 'react';

const ZipCodeForm = ({ onFormSubmit }) => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();// prevents [age refresh
    if (zipCode.trim() !== '') //ignores any empty space{
      try {
        const response = await fetch(`http://localhost:8080/weather/${zipCode}`);// call to the Spring Boot backend
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        onFormSubmit(data);
        setError(''); // Reset the error state when a valid zip code is successfully fetched
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again.'); // Set the error state
        onFormSubmit({ error: 'Error fetching weather data. Please try again.' });

      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Zip Code:
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
        <button type="submit">Get The Weather!</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display the error message */}
    </div>
  );
};

export default ZipCodeForm;
