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
const register = document.getElementById('btn-register');
//Events
register.addEventListener('click', create);

//Create
function create() {
    var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('remail').value;
    var senha = document.getElementById('rpassword').value;
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => { 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid), {
                username: usuario,
                email: email
            })

            alert('Usuario criado!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("Email ja existe" + errorMessage);
        });

};