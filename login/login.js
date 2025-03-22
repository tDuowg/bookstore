const btnLogin = document.getElementById("btnLogin");
const email = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
function handleLogin() {
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
    let users = localStorage.getItem("users");
    if (!email.value || !password.value) {
        alert("Please enter email and password");
    } else {
        users = JSON.parse(users); // convert string to json
        const user = users.find(user => user.email == email.value && user.password == password.value);
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            alert("Login successful");
            location.href = "../home";
        } else {
            alert("Invalid username or password");
        }
    }
}

btnLogin.addEventListener("click", () => {
    handleLogin();
})