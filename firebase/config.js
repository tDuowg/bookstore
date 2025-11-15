//import firebase sdk
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { GoogleAuthProvider, signOut, signInWithPopup, onAuthStateChanged, getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
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
    if (result.user) {
        const users = await getDocs(collection(db, "users"));
        for (let i = 0; i < users.docs.length; i++) {
            const user = users.docs[i].data();
            if (user.email === result.user.email) {
                return user;
            }
        }
        const userRegister = {
            fullName: result.user.displayName,
            email: result.user.email,
            password: "123456A@",
            gender: "",
            birth: "",
            id: result.user.uid,
        }
        const res = await registerUser(userRegister);
        return res;
    }
    return null;
}

export async function registerUser(userData) {
    let body = userData;
    if (!body.id) body.id = crypto.randomUUID();
    body.createdAt = new Date();
    body.updatedAt = new Date();
    body.role = "user";
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

export async function addProduct(productData) {
    let body = productData;
    if (!body.id) body.id = crypto.randomUUID();

    body.createdAt = new Date();
    body.updatedAt = new Date();
    body.rating = 5;
    body.totalRating = 0;
    const res = await addDoc(collection(db, "products"), body);
    return res;
}
// Lấy ra tất cả sản phẩm từ firestore
export async function getAllProducts() {
    let products = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        products.push(querySnapshot.docs[i].data());
    }
    return products;
}

export async function getProductById(id) {
    const querySnapshot = await getDocs(collection(db, "products"));
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        if (querySnapshot.docs[i].data().id === id) {
            return querySnapshot.docs[i].data();
        }
    }
    return null;
}
export async function updateProduct(id, productData) {
    const querySnapshot = await getDocs(collection(db, "products"));
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        if (querySnapshot.docs[i].data().id === id) {
            const docRef = doc(db, "products", querySnapshot.docs[i].id);
            await updateDoc(docRef, productData);
        }
    }

}

export async function deleteProduct(id) {
    const querySnapshot = await getDocs(collection(db, "products"));
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        if (querySnapshot.docs[i].data().id === id) {
            const docRef = doc(db, "products", querySnapshot.docs[i].id);
            await deleteDoc(docRef);
        }
    }

}