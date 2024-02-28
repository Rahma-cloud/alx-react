import React, { createContext, useState } from 'react';

// Define a default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Define a default logOut function
const defaultLogOut = () => {
  console.log('Logging out');
};

// Create a React context containing a user object and a logOut function
const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

// Create a provider component to wrap your app and set the default values
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  // Define the logOut function
  const logOut = () => {
    setUser(defaultUser);
  };

  return (
    <AppContext.Provider value={{ user, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
