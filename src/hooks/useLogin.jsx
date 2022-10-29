import { useState } from 'preact/hooks';
import { useAuthContext } from '../context/AuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = setState(null);
  const { dispatch } = useAuthContext;

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const responce = await fetch('', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    const json = await response.json();

    if(!response.ok) {
      setError(json.error);
      setIsLoading(false);
    } else {
      localStorage.setItem('user', JSON.stringify(json));
      setError(null);
      setIsLoading(false);
      dispatch({type: 'LOGIN', payload:json});
    }
  }
  return { login, isLoading, error };
}