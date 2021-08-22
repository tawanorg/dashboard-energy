import React from 'react';

export const AppContext = React.createContext({
  token: 103,
  setToken: null,
});

export const useAppContext = () => {
  return React.useContext(AppContext);
};
