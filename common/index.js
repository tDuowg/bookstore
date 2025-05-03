const pathName = window.location.pathname;
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");

if (btnLogin && btnSignUp) {
    btnSignUp.addEventListener("click", () => {
        window.location.href = "../signup/";
    });

    btnLogin.addEventListener("click", () => {
        window.location.href = "../login/";
    });
}

if (!(pathName.includes("login") || pathName.includes("signup"))) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const menu = document.getElementById("menu");
    const form = document.getElementById("form");
    if (currentUser) {
        menu.style.display = "flex";
        form.style.display = "none";
        document.getElementById("dropdownMenuButton1").innerText = currentUser.fullName;
        const logout = document.getElementById("logout");
        logout.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            window.location.href = "../login/";
        });
    } else {
        form.style.display = "flex";
        menu.style.display = "none";
    }
} 
