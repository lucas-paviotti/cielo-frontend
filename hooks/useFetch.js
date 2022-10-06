import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    refetch(url);
  }, [url]);

  const refetch = async (url) => {
    if (url === null) return;
    const res = await fetch(url).then((result) => result.json());
    if (res.error) {
      setError(res.error);
      setLoading(false);
      return;
    }
    setData(res.data);
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
