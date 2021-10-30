import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const AuthInit=()=>{
    initializeApp(firebaseConfig);
}

export default AuthInit;
