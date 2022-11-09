import { createContext } from 'preact';
import { useReducer, useEffect } from "preact/hooks";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        user: action.payload
      }
    case 'LOGOUT':
      return {
        user: null
      }
    default:
      return state
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    //original state established here
    user: null
  })

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      dispatch({type: 'LOGIN', payload: user})
    }
  },[])

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}