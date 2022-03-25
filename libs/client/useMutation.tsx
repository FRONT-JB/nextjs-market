import { useState } from 'react';

const useMutation = (
  url: string,
): [(data: any) => void, { loading: boolean; data: any; error: any }] => {
  const [fetching, setFetching] = useState<{
    loading: boolean;
    data: any;
    error: any;
  }>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  const mutationFetch = (data: any) => {
    setLoading(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };
  return [mutationFetch, { loading, data, error }];
};

export default useMutation;
