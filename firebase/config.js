//import firebase sdk
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { GoogleAuthProvider, signOut, signInWithPopup, onAuthStateChanged, getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
// Config firebase cho app
const firebaseConfig = {
  apiKey: "AIzaSyBZxT8cCXZJ10BNZdhRt5wVleXBYjPF8GI",
  authDomain: "book-store-a9098.firebaseapp.com",
  projectId: "book-store-a9098",
  storageBucket: "book-store-a9098.firebasestorage.app",
  messagingSenderId: "850464247474",
  appId: "1:850464247474:web:184b5983b723d6b0ea83ab",
  measurementId: "G-QW1JR43YLC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export async function loginWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    return result.user;
}

export async function registerUser(userData) {
    let body = userData;
    body.id = crypto.randomUUID();
    body.createdAt = new Date();
    body.updatedAt = new Date();
    const docRef = await addDoc(collection(db, "users"), body);
    return docRef;
}

export async function loginUser(email, password) {
    const users = await getDocs(collection(db, "users"));
    for (let i = 0; i < users.docs.length; i++) {
        const user = users.docs[i].data();
        if (user.email === email && user.password === password) {
            return user;
        }
    }
    return null;
}
