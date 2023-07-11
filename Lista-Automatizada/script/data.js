import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, onSnapshot }
    from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyArMJWRT0QJwz577cRrfHQ0BITB15hw9KA",
    authDomain: "novalistcont.firebaseapp.com",
    projectId: "novalistcont",
    storageBucket: "novalistcont.appspot.com",
    messagingSenderId: "766575246447",
    appId: "1:766575246447:web:eb5157f838ee47e339619a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Var Const
const db = getFirestore();
var btn2 = document.getElementById('remov');
var btn = document.getElementById('add');

//Event
btn2.addEventListener("click", updateData);
btn.addEventListener("click", add);
//Nuvem setar
async function insertCustomID() {
    var ref = doc(db, "Lista", userid.user);
    await setDoc(
        ref, {
        Arrey: list
    }
    ).then(() => {
        data();
    }).catch((err) => {
        alert("Erro ao criar" + err);
    })
}
//Nuvem pegar
onload = async function () {
    if (loginstatus == false) {
        userid = JSON.parse(localStorage.getItem('us'))
    };

    var ref = doc(db, "Lista", userid.user);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        setTimeout(() => {
            list = docSnap.data().Arrey;
            exibir();
            addList();
        }, 1200)
    } else {
        setTimeout(() => {
            let lista = localStorage.getItem('lista');
            list = JSON.parse(lista);
            exibir();
            addList();
        }, 2600);
    
    }
}
//Nuvem update
async function updateData() {
    list.pop();
    var ref = doc(db, "Lista", userid.user);
    await updateDoc(
        ref, {
        Arrey: list
    }
    ).then(() => {
        exibir();
        addList();
        hidenShowBtn();
    }).catch((err) => {
        alert("Erro ao atualizar" + err);
    })
}
function add() {
    start();
    setTimeout(() => {
        insertCustomID();
        localStorage.setItem('lista', JSON.stringify(list));
    }, 1000)
}