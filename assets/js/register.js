

/*Elements*/
const registerForm = document.getElementById("registerForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const registerBtn = document.getElementById("registerBtn");
const agreeTerms = document.getElementById("agreeTerms");

document.addEventListener("DOMContentLoaded", () => {
    initPasswordToggle();
    initRegister();
});

/*Password Toggle*/
function initPasswordToggle() {
    setupPasswordToggle("password","togglePassword");
    setupPasswordToggle("confirmPassword","toggleConfirmPassword");
}

function setupPasswordToggle(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
    console.log(inputId, input);
    console.log(buttonId, button);
    if (!input || !button) return;
    button.addEventListener("click", () => {
        console.log("Eye button clicked");
        input.type =
            input.type === "password"
                ? "text"
                : "password";
    });
}


/*Register*/
function initRegister() {
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", registerUser);
}

function registerUser(e) {
    e.preventDefault();

    console.log("Register button clicked");
    const name = fullName.value.trim();
    const userEmail = email.value.trim().toLowerCase();
    const userPassword = password.value;
    const confirm = confirmPassword.value;

    // Validation
    if (!name || !userEmail || !userPassword || !confirm) {
        alert("Please fill all fields.");
        return;
    }

    if (!agreeTerms.checked) {
        alert("Please accept Terms & Conditions.");
        return;
    }

    if (userPassword !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("cm_users")) || [];

    // Check duplicate email
    const alreadyExists = users.some(user => user.email === userEmail);

    if (alreadyExists) {
        alert("This email is already registered.");
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email: userEmail,
        password: userPassword
    };

    // Save
    users.push(newUser);
    localStorage.setItem("cm_users", JSON.stringify(users));
    alert("Registration Successful!");
    window.location.href = "login.html";
}
