import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

// Sign in with Google
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
