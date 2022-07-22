import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC3GMo9cHUmyQH_liVNSnAVJcY9rQMyTWw",
    authDomain: "emparreact.firebaseapp.com",
    projectId: "emparreact",
    storageBucket: "emparreact.appspot.com",
    messagingSenderId: "50172903022",
    appId: "1:50172903022:web:0fc90cfc35e530d06c307f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);