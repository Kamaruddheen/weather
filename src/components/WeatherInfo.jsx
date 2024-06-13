import { useState, useEffect } from "react";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";

function WeatherInfo({ weather }) {
  // State to store the current date and time
  const [date, setDate] = useState(new Date());

  // useEffect to update the current date and time every second
  useEffect(() => {
    // Set an interval to update the currentDate state every second
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

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
  );
}

export default WeatherInfo;
