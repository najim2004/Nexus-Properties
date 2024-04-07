import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const contextData = {};
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
