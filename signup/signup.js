import {registerUser} from "../firebase/config.js";
const btnSignUp = document.getElementById("btnSignUp"); // Get the button element
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const gender = document.getElementById("gender");
const birth = document.getElementById("birth");
async function handleSignUp() {
    if (fullName.value.split(" ").length < 2) {
        alert("Please enter full name with at least 2 words");
        return;
    }
    if (fullName.value.match(/[^a-zA-Z ]/)) {
        alert("Full name must contain only letters");
        return;
    }
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
    if (confirmPassword.value !== password.value) {
        alert("Password and confirm password do not match");
        return;
    }
    if (!gender.value || !birth.value) {
        alert("Please enter input");
        return;
    }
    if (!fullName.value || !email.value || !password.value || !confirmPassword.value) { 
        alert("Please enter username and password");
    } else if (password.value !== confirmPassword.value) {
        alert("Password and confirm password do not match");
    } else {
        const user = { // Create a new user object
            fullName: fullName.value,
            email: email.value,
            password: password.value,
            gender: gender.value,
            birth: birth.value
        }
        const res = await registerUser(user);
        
        alert("Sign up successful");
        window.location.href = "../login/"; // Redirect to login page
    }
}

btnSignUp.addEventListener("click", () => { // Add event listener to the button
    handleSignUp();
}) 