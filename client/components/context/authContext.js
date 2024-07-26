// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Function to check if the user is logged in
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/status', {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:3000/api/auth/logout', {
        method: 'GET',
        credentials: 'include',
      });
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
