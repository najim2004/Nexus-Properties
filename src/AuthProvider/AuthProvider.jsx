import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const sweetAlert = (title, icon, text, btn, time) => {
    return Swal.fire({
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: btn,
      timer: time,
    });
  };

  const contextData = {
    user,
    loading,
    registerUser,
    loginUser,
    logOutUser,
    sweetAlert,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
