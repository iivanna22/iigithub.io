import {useState, useCallback} from 'react';
import axios from 'axios';

export const useRequest = () => {

  const api = axios.create({
    baseURL: 'http://localhost:3000/'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', headers, body = null) => {
    setLoading(true);

    try {
      const response = await api({
        url,
        method,
        headers,
        data: body
      })

      if (!response) {
        throw new Error('Error in getting data');
      }

      setLoading(false);
      return response.data;

    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }

  }, []);

  const clearError = useCallback( () => setError(null), []);

  return { loading, request, error, clearError }
}