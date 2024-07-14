import  { useState } from 'react';
import useGeoLocation from '../hooks/useGeoLocation';

const GeoLocationComponent = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const { location, loading, error, getGeoLocation } = useGeoLocation('21bc49d21749987e56b5a372a97d8e09');

  const handleSearch = () => {
    getGeoLocation(city, state, country);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={handleSearch}>Get Location</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location.latitude && location.longitude && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default GeoLocationComponent;
