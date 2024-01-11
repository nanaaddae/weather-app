import React, { useEffect, useState } from 'react';

const WeatherDisplay = ({ zipCode }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT/${zipCode}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle the error appropriately 
      }
    };

    if (zipCode) {
      fetchWeatherData();
    }
  }, [zipCode]);

  return (
    <div>
      <h2>Current Weather</h2> 
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Conditions: {weatherData.conditions}</p>
          {/* Will add more potentially */}
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;