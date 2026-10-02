
function StationHeader({ stationName, location, slogan }) {
  return (
    <header className="station-header">
      <h1>{stationName}</h1>
      <h2>{slogan}</h2>
      <p>{location}</p>
    </header>
  );
}

export default StationHeader;