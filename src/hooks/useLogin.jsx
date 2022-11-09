import { useState } from 'preact/hooks';
import { useAuthContext } from './useAuthContext';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext;

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        const user = userCredential.user;
        console.log('userrrr  ', user)
        localStorage.setItem('user', JSON.stringify(json));
        setError(null);
        setIsLoading(false);
        dispatch({type: 'LOGIN', payload:user});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(`Error code ${error.code}: ${errorMessage}`)
      })
  }
  return { login, isLoading, error };
}