import { useState } from 'react';

const useMutation = (
  url: string,
): [(data: any) => void, { loading: boolean; data: any; error: any }] => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  const mutation = (data: any) => {};
  return [mutation, { loading, data, error }];
};

export default useMutation;