import { useState } from "react";

const useGeoLocation = (apiKey) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGeoLocation = async (
    cityName,
    stateCode = "",
    countryCode = "",
    limit = 1
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.length > 0) {
        setLocation({
          latitude: data[0].lat,
          longitude: data[0].lon,
        });
      } else {
        setError("No data found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { location, loading, error, getGeoLocation };
};

export default useGeoLocation;
