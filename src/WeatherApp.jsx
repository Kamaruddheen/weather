import { useState } from "react";
import "./styles.css";
import WeatherStatus from "./components/WeatherStatus";
import WeatherInfo from "./components/WeatherInfo";
import WeatherInput from "./components/WeatherInput";

function WeatherApp() {
  // State to store the weather data
  const [weather, setWeather] = useState(null);
  // State to store the city name input by the user
  const [city, setCity] = useState("");
  // State to manage loading state
  const [loading, setLoading] = useState(false);
  // State to handle error messages
  const [error, setError] = useState(null);
  // API Key for OpenWeatherMap API
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // console.log("API KEY : ", apiKey);

  // Function to fetch weather data from the API
  const fetchWeather = async () => {
    // If the city is empty, set an error message
    if (!city) {
      setError("Please enter a city name!");
      return;
    }

    // Set loading state to true and reset error
    setLoading(true);
    setError(null);

    try {
      // Fetch data from the OpenWeatherMap API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      // If the response is not ok, throw an error
      if (!response.ok) throw new Error("City not found");

      // Parse the response data
      const data = await response.json();
      // Update the weather state with the fetched data
      setWeather(data);

      // console.log("------------------------------------");
      // console.log(weather);
    } catch (error) {
      // Set error state if there was an error during fetch
      setError(error.message);
    } finally {
      // Set loading state to false after the fetch is complete
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <WeatherInput city={city} setCity={setCity} fetchWeather={fetchWeather} />

      <WeatherStatus loading={loading} error={error} />
      {weather && !loading && !error && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default WeatherApp;
