//AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState('https://api.blink.sv/graphql');
  const [accountWalletId, setAccountWalletId] = useState('');
  const [paymentRequest, setPaymentRequest] = useState('');

  const value = {
    authToken,
    setAuthToken,
    apiEndpoint,
    setApiEndpoint,
    accountWalletId,
    setAccountWalletId,
    paymentRequest,
    setPaymentRequest
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
