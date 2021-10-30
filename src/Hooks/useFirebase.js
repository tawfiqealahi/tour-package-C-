import { getAuth,signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { useState } from "react";
import AuthInit from "../Components/LoginDetails/firebase/firebase.init";


AuthInit();

const useFirebase = () => {


    const [user,setUser]=useState({});
    console.log(user);
   
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{
        


        signInWithPopup(auth, GoogleProvider)
        .then(result=>{
            
            const user = result.user;
            setUser(user);

        }).catch(error=>{
        
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorCode, errorMessage);
        })
       
    }
    return{
        user, signInWithGoogle
    }

};

export default useFirebase;