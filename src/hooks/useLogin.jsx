import { useState } from 'preact/hooks';
import { useAuthContext } from './useAuthContext';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    await signInWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        const token = userCredential.user.accessToken;
        setError(null);
        setIsLoading(false);
        localStorage.setItem('user', JSON.stringify(token));
        dispatch({type: 'LOGIN', payload:JSON.stringify(token)});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(`Error code ${errorCode}: ${errorMessage}`);
      })
  }
  return { login, isLoading, error };
}