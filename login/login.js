import { loginWithGoogle, loginUser } from "../firebase/config.js";

const btnLogin = document.getElementById("btnLogin");
const email = document.getElementById("floatingInput");
const btnLoginGG = document.getElementById("btnLoginGG");
const password = document.getElementById("floatingPassword");
async function handleLogin() {
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        alert("Invalid email format");
        return;
    }
    if (password.value.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }
    if (!password.value.match(/[a-z]/) || !password.value.match(/[A-Z]/) || !password.value.match(/[0-9]/)) {
        alert("Password must contain at least 1 lowercase letter, 1 uppercase letter and 1 number");
        return;
    }
    if (!email.value || !password.value) {
        alert("Please enter email and password");
    } else {
        const user = await loginUser(email.value, password.value);
        if (user) { // If user exists
            localStorage.setItem("currentUser", JSON.stringify(user));
            alert("Login successful");
            location.href = "../home/";
        } else {
            alert("Invalid username or password");
        }
    }
}
async function handleLoginWithGG() {
    const user = await loginWithGoogle();
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login successful");
        location.href = "../home/";
    }
    else {
        alert("Login with Google failed");
    }
}

btnLogin.addEventListener("click", handleLogin);

btnLoginGG.addEventListener("click", handleLoginWithGG);