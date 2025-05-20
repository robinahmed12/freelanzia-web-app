import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';



const AuthProvider = ({children}) => {

    const [user , setUser] = useState([])
   
    

    const createUser = (email , password)=> {

        return createUserWithEmailAndPassword(auth , email , password )
    }

    const loginUser= (email , password) => {

        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOutUser = () => {
        return signOut(auth),
        setUser(null)
    }

      useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed:', currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup
  }, []);


    const userInfo = {
        createUser,
        loginUser,
        user,
        setUser,
        logOutUser
    }
    return (
       <>
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
       </>
    );
};

export default AuthProvider;