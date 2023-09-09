import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../components/firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../components/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    const ref = doc(db, "users", user.uid);
    setDoc(ref, {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      password: user.password,
    });
    // .then(() => {})
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          alert("User logged in successfully!");
        } else {
          alert("User not logged in!");

          console.log("User not logged in!");
        }
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("sign-out successful");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user.uid);
      } else console.log("No user");
    });
  }, [user]);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
