import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = (location, histroy) => {
    setIsloading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const redairect = location?.state?.from || "/";
        histroy.replace(redairect);
        setUser(result.user);
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const userRegister = (name, email, password, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.replace("/");
        const user = { email, displayName: name };
        setUser(user);
        setError("");
        allUserRegisterData(email);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // log in

  const logInUser = (email, password, location, histroy) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redairect = location?.state?.from || "/";
        histroy.replace(redairect);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const unKnownUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unKnownUser;
  }, [auth]);

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsloading(false));
  };

  const allUserRegisterData = (email) => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return {
    user,
    error,
    isLoading,
    userRegister,
    signInWithGoogle,
    logInUser,
    logOut,
  };
};

export default useFirebase;
