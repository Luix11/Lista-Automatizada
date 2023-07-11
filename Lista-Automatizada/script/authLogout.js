//Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArMJWRT0QJwz577cRrfHQ0BITB15hw9KA",
    authDomain: "novalistcont.firebaseapp.com",
    projectId: "novalistcont",
    storageBucket: "novalistcont.appspot.com",
    messagingSenderId: "766575246447",
    appId: "1:766575246447:web:eb5157f838ee47e339619a"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const logout = document.getElementById('logout');
//Events
logout.addEventListener('click', lout);

function lout(e) {
    signOut(auth).then(() => {
        // Sign-out successful.
        userid.user = '';
        loginstatus = false;
        alert('Usuario deslogado');
        window.location = '../index.html'
    }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });
}