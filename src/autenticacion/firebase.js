import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2FaziYGfWTnbsSww-1yoyWRLoDNMFfao",
    authDomain: "autenticacion-74a79.firebaseapp.com",
    projectId: "autenticacion-74a79",
    storageBucket: "autenticacion-74a79.firebasestorage.app",
    messagingSenderId: "264106430857",
    appId: "1:264106430857:web:952f75fa21769204c05158",
    measurementId: "G-ES73ER4EL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

export function crearUsuario(email, password) {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        console.log("Credenciales", userCredential);
        const user = userCredential.user;
        console.log(user);
        // ...
    })
        .catch((error) => {
            console.log(error.code, error.message);
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}
