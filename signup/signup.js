const btnSignUp = document.getElementById("btnSignUp");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const gender = document.getElementById("gender");
const birth = document.getElementById("birth");
function handleSignUp() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (!fullName.value || !email.value || !password.value || !confirmPassword.value) {
        alert("Please enter username and password");
    } else if (password.value !== confirmPassword.value) {
        alert("Password and confirm password do not match");
    } else {
        const user = {
            id: users.length + 1,
            fullName: fullName.value,
            email: email.value,
            password: password.value,
            gender: gender.value,
            birth: birth.value
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Sign up successful");
        window.location.href = "../login";
    }
}

btnSignUp.addEventListener("click", () => {
    handleSignUp();
}) 