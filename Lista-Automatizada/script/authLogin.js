//Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
const login = document.getElementById('btn-login');
const resetSenha = document.getElementById('recuperação');
//Events
login.addEventListener('click', log);
resetSenha.addEventListener('click', recoverPassword);
//Login
function log() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            })

            alert('Usuario logado!');
            window.location = "./html/home.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("Email ou senha incorreto" + errorMessage);
        });

};

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        userid.user = uid;
        loginstatus = true;
        setTimeout(() => {
            localStorage.setItem('us', JSON.stringify(userid));
        }, 500)

    } else {

    }
});

function recoverPassword() {
    var email = document.getElementById('email').value;
    sendPasswordResetEmail(auth,email).then(()=>{
        alert('Email enviado');
    }).catch(error => {
        alert('Erro, email não existe'+error);
    })
}