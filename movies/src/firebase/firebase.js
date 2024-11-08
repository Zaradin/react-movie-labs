import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUQD0eRQHEsgnquoRAi5A1pqxzAAmsSik",
    authDomain: "joshsmovieslabs.firebaseapp.com",
    projectId: "joshsmovieslabs",
    storageBucket: "joshsmovieslabs.firebasestorage.app",
    messagingSenderId: "994277082346",
    appId: "1:994277082346:web:f8b9de7f9ff934698f4393",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
