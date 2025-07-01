import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

export function crearUsuario(email, password) {
    return (
        new Promise((rech, resu => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    console.log("Credenciales", userCredential);
                    const user = userCredential.user;
                    console.log(user);
                    resu(user)
                    // ...
                })
                .catch((error) => {
                    console.log(error.code, error.message);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    rech(error)
                    // ..
                });
        }))
    )
}

export function loginEmailPass(email, password) {
    return (
        new Promise((resu, rech) => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Credenciales", userCredential)
                    const user = userCredential.user;
                    console.log(user)
                    resu(user)
                })
                .catch((error) => {
                    console.log(error.code, error.message);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    rech(error)
                });
        })
    )
}
