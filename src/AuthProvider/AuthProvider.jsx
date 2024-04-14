import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    fetch("/Json/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        setTimeout(() => setDataLoading(false), 1500);
      });
  }, []);

  useEffect(() => {
    fetch("/Json/review.json")
      .then((response) => response.json())
      .then((data) => {
        setReviewData(data);
      });
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const LoginByGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const LoginByGitHub = () => {
    return signInWithPopup(auth, githubProvider);
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

  const updateUserProfile = (Name, photo) => {
    return updateProfile(user, {
      displayName: Name,
      photoURL: photo ? photo : "",
    });
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
  const sweetLoginAlert = (title, img, time) => {
    return Swal.fire({
      imageUrl: img,
      imageWidth: 150,
      title: title,
      timer: time,
      showConfirmButton: false,
    });
  };

  const contextData = {
    data,
    reviewData,
    user,
    loading,
    dataLoading,
    LoginByGoogle,
    LoginByGitHub,
    registerUser,
    loginUser,
    logOutUser,
    sweetAlert,
    sweetLoginAlert,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
