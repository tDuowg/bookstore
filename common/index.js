const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");

btnSignUp.addEventListener("click", () => {
    window.location.href = "../signup/signup.html";
});

btnLogin.addEventListener("click", () => {
    window.location.href = "../login/login.html";
});
