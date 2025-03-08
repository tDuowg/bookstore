const btnLogin = document.getElementById("btnLogin");
const email = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
function handleLogin() {
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