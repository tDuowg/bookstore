const btnSignUp = document.getElementById("btnSignUp");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const gender = document.getElementById("gender");
const birth = document.getElementById("birth");
function handleSignUp() {
    // fullName: Phải ít nhất 2 từ và không chứa kí tự đặc biệt.
    if (fullName.value.split(" ").length < 2)  {
        alert("Full name must have at least 2 words");
        return;
    }
    if (fullName.value.match(/[^a-zA-Z0-9 ]/)) {
        alert("Full name must not contain special characters");
        return;
    }
    // email: Phải có dạng email(abc@xyz.vn) và ít nhất phải có 8 kí tự.
    if (email.value.length < 8) {
        alert("Email must have at least 8 characters");
        return;
    }
    // match xử lý định dạng ^[a-zA-Z0-9]+: 1 chuỗi kí tự bắt đầu bằng chữ cái hoặc số.
    if (!email.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {
        alert("Invalid email format");
        return;
    }
    // password: Phải có ít nhất 6 kí tự.
    if (password.value.length < 6) {
        alert("Password must have at least 6 characters");
        return;
    }
    // confirmPassword: Phải trùng với password.
    if (confirmPassword.value != password.value) {
        alert("Password and confirm password do not match");
        return;
    }
    // không được để trống trường input.
    if (!gender.value || !birth.value) {
        alert("Please enter input");
        return;
    }
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