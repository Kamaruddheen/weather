function WeatherStatus(props) {
  return (
    <div className="status">
      {props.loading && <p>Loading...</p>}
      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
}

export default WeatherStatus;
