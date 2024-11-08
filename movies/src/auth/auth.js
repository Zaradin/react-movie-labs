import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const signUp = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error.message);
    }
};

export const logIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error.message);
    }
};

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error.message);
    }
};
