import { useEffect, useState } from "react";

export default function useGeolocation(
  options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
) {
  const [coords, setCoords] = useState(null); // { latitude, longitude }

  useEffect(() => {
    if (!("geolocation" in navigator)) return;

    const onSuccess = (pos) => {
      const { latitude, longitude } = pos.coords || {};
      setCoords({ latitude, longitude });
    };

    const onError = () => {
      setCoords(null);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }, []);

  return { coords };
}