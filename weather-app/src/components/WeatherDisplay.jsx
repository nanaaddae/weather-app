
import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  
  return (
    <div>
      <h2>Current Weather</h2>
      {weatherData ? (
        <div>
        <p>City Name: {weatherData.name}</p>
        <p>Temperature: {Math.round((weatherData.main.temp - 273.15) * 9/5 + 32)}°F</p>
        <p>Conditions: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;