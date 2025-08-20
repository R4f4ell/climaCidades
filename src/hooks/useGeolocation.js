import { useEffect, useState } from "react";

export default function useGeolocation(
  options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
) {
  const [coords, setCoords] = useState(null); // { latitude, longitude }
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError(new Error("Geolocalização não suportada pelo navegador."));
      setLoading(false);
      return;
    }

    const onSuccess = (pos) => {
      const { latitude, longitude } = pos.coords || {};
      setCoords({ latitude, longitude });
      setError(null);
      setLoading(false);
    };

    const onError = (err) => {
      setError(err);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }, []);

  return { coords, loading, error };
}