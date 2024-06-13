function WeatherInput({ city, setCity, fetchWeather }) {
  // Function to update the city state
  function addCity(params) {
    setCity(params);
  }

  return (
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
  );
}

export default WeatherInput;
