import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7DmAjelAihBUI7w5CoNndCVKfOVbla9E",
    authDomain: "ecommerce-88020-7fa2b.firebaseapp.com",
    projectId: "ecommerce-88020-7fa2b",
    storageBucket: "ecommerce-88020-7fa2b.firebasestorage.app",
    messagingSenderId: "281647500780",
    appId: "1:281647500780:web:4e9d26cc5f4544224304c9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore ( app );

export default db;