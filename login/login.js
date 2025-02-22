const btnLogin = document.getElementById("btnLogin");
const email = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
function handleLogin() {
    let users = localStorage.getItem("users");
    if (!email.value || !password.value) {
        alert("Please enter username and password");
    } else if (!users) {
        alert("No users found");
    } else {
        users = JSON.parse(users); // convert string to json
        const user = users.find(user => user.email == email.value && user.password == password.value);
        if (user) {
            alert("Login successful");
            location.href = "../home/home.html";
        } else {
            alert("Invalid username or password");
        }
    }
}

btnLogin.addEventListener("click", () => {
    handleLogin();
})