/*CareerMap AI - Login*/
document.addEventListener("DOMContentLoaded", () => {
    initPasswordToggle();
    initLogin();
});


/*Elements*/
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const togglePassword = document.getElementById("togglePassword");


/*Password Toggle*/
function initPasswordToggle() {
    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");
    if (!password || !toggle) return;
    toggle.addEventListener("click", () => {
        password.type =
            password.type === "password"
                ? "text"
                : "password";
    });
}


/*Login*/
function initLogin() {
    const form = document.getElementById("loginForm");
    if (!form) return;
    form.addEventListener("submit", loginUser);
}

function loginUser(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }
    const users = JSON.parse(localStorage.getItem("cm_users")) || [];
    const user = users.find(user =>
        user.email === email &&
        user.password === password
    );
    if (!user) {
        alert("Invalid email or password.");
        return;
    }
    localStorage.setItem(
        "cm_session",
        JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email,
            loggedIn: true
        })
    );
    alert(`Welcome ${user.name}!`);
    window.location.href = "dashboard.html";
}