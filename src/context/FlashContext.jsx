import { createContext } from 'preact';
import { useReducer, useEffect } from "preact/hooks";

export const FlashContext = createContext();
export const flashReducer = (state, action) => {
  switch(action.type) {
    case 'STORE_URLS':
      return {
        urls: action.payload
      }
    case 'CACHE_URLS':
      return {
        urls: action.payload
      }
    default:
      return state
  }
};

export const FlashContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(flashReducer, {
    //original state established here
    urls: []
  })

  // useEffect(() => {
  //   const user = localStorage.getItem('user');

  //   if (user) {
  //     dispatch({type: 'LOGIN', payload: user})
  //   }
  // },[])

  return (
    <FlashContext.Provider value={{...state, dispatch}}>
      { children }
    </FlashContext.Provider>
  )
};