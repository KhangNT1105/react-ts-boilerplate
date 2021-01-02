import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDAaw2KWu2LOhMbf-9vhZFZaErMy4gg1_s",
    authDomain: "clone-9a233.firebaseapp.com",
    projectId: "clone-9a233",
    storageBucket: "clone-9a233.appspot.com",
    messagingSenderId: "442867131717",
    appId: "1:442867131717:web:0cc4c45c545a5996934a2c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider }