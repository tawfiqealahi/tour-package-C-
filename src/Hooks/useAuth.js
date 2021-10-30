import React, { useState } from 'react';
import firebaseConfig from '../Components/LoginDetails/firebase/firebase.config';
import { getAuth,signInWithPopup, GoogleAuthProvider  } from "firebase/auth";



firebaseConfig();

const useAuth = () => {

    const [user,setUser]=useState({});
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{

         return(signInWithPopup(auth, GoogleProvider)
         )
 

    }


    return (
       user, setUser, signInWithGoogle
    );
};

export default useAuth;