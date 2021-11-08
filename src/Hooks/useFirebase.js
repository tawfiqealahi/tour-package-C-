import { getAuth,signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";

import AuthInit from "../Components/LoginDetails/firebase/firebase.init";


AuthInit();

const useFirebase = () => {
    const [user,setUser]=useState({});
    const [error, setError] = useState("");
    // console.log(user);

    const [loading, setLoading] = useState(true)

    
   
    const auth = getAuth();
    


    const GoogleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{

        return signInWithPopup(auth, GoogleProvider)

        // .finally(()=>{setLoading(false)})
        .then(result=>{
            
            const user = result.user;
            setUser(user);
            sessionStorage.setItem("email", user.email);

            setError("");

        }).catch(error=>{
        
            const errorMessage = error.message;
            
            setError( errorMessage);
        })
       
    }

    // log out 
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    };

    // observe user state changed
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
		return () => unsubscribe;
	},);



    return{
        user, signInWithGoogle, loading, logOut
    }

};

export default useFirebase;