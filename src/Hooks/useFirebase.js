import { getAuth,signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
// import { useHistory } from 'react-router-dom';
import AuthInit from "../Components/LoginDetails/firebase/firebase.init";


AuthInit();

const useFirebase = () => {


    const [user,setUser]=useState({});
    console.log(user);
   
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{

        // const location = useLocation();
        // const history = useHistory();
        const location =useLocation();
        const history = useHistory();
                const redirect_uri = location.state?.from || '/servicedetails';


        signInWithPopup(auth, GoogleProvider)
        .then(result=>{
            
            const user = result.user;
            history.push(redirect_uri)
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