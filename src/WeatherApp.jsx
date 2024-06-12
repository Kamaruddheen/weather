import { useEffect, useState } from "react";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import "./styles.css";

function WeatherApp() {
  // State to store the weather data
  const [weather, setWeather] = useState(null);
  // State to store the city name input by the user
  const [city, setCity] = useState("");
  // State to manage loading state
  const [loading, setLoading] = useState(false);
  // State to handle error messages
  const [error, setError] = useState(null);
  // State to store the current date and time
  const [date, setDate] = useState(new Date());
  // API Key for OpenWeatherMap API
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // console.log("API KEY API KEY", apiKey);

  // useEffect to update the current date and time every second
  useEffect(() => {
    // Set an interval to update the currentDate state every second
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  // Function to update the city state
  function addCity(params) {
    setCity(params);
  }

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

  // Function to get the appropriate weather icon based on the climate
  const getWeatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return <WiDaySunny size={50} />;
      case description.match(/cloud/)?.input:
        return <WiCloudy size={50} />;
      case description.match(/rain/)?.input:
        return <WiRain size={50} />;
      default:
        return <WiDaySunny size={50} />;
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => addCity(e.target.value)}
        />
        <button type="button" onClick={fetchWeather}>
          Go
        </button>
      </div>

      <div className="status">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
      </div>
      {weather && !loading && !error && (
        <div className="weather-info">
          <div className="icon-temp">
            <h2>{weather.name}</h2>
            {getWeatherIcon(weather.weather[0].description)}
          </div>
          <p className="temp">{weather.main.temp}°C</p>
          <p className="description">{weather.weather[0].description}</p>
          <div className="datetime">
            <p>
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>{date.toDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
