import ZipCodeForm from './components/ZipCodeForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleFormSubmit = (data) => {
    
    //console.log(weatherData);
    setWeatherData(data);

    console.log('Weather data received:', data);


  };

  return (
    <div>
      <h1>Weather App</h1>
      <ZipCodeForm onFormSubmit={handleFormSubmit} />
      <WeatherDisplay weatherData={weatherData}/>
    </div>
  );
};

export default App;
