import logo from './logo.svg';
import ZipCodeForm from './components/ZipCodeForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';


const App = () => {
  const handleFormSubmit = (weatherData) => {
    // Handle the received weather data (e.g., update state)
    console.log(weatherData);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <ZipCodeForm onFormSubmit={handleFormSubmit} />
      <WeatherDisplay />
    </div>
  );
};

export default App;
