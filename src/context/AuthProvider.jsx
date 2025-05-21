import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth), setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (updatedData) => {
    setUser({ ...auth.currentUser, ...updatedData });
    return updateProfile(auth.currentUser, updatedData);
  };

  const userInfo = {
    createUser,
    loginUser,
    user,
    setUser,
    logOutUser,
    signInWithGoogle,
    updateUserProfile,
  };
  return (
    <>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
