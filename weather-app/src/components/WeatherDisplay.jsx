import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  const isValidData = weatherData && !weatherData.error;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Current Weather</h2>
              {isValidData ? (
                <div>
                  <p>City Name: {weatherData.name}</p>
                  <p>Temperature: {Math.round((weatherData.main.temp - 273.15) * 9/5 + 32)}°F</p>
                  <p>Conditions: {weatherData.weather[0].description}</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="Weather Icon"
                    style={{ float: 'right', marginRight: '10px', width: '150px', height: '150px' }}
                  />
                </div>
              ) : (
                <div>
                  <p>No weather data available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
