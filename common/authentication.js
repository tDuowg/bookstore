const pathName1 = window.location.pathname;
if ((pathName1.includes("login") || pathName1.includes("signup")) && localStorage.getItem("currentUser")) { // Nếu đang là login hoặc sign up mà đã đăng nhập có currentUser thì sẽ bắt vào home
    window.location.href = "../home";
} 
if (!(pathName1.includes("login") || pathName1.includes("signup") || pathName1.includes("home")) && !localStorage.getItem("currentUser")) { // Nếu không phải login hoặc sign up mà không có currentUser thì sẽ bắt vào login
    window.location.href = "../login";
}