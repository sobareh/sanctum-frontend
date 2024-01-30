import { createContext, useReducer } from 'react';
import globalReducer from './GlobalReducer';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    user: null,
    isLoading: false,
    setNotification: false,
    notification: {
      message: '',
      type: '',
      position: '',
    },
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
