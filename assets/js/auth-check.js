

document.addEventListener("DOMContentLoaded", () => {
    const session = JSON.parse(localStorage.getItem("cm_session"));
    if (session && session.loggedIn) {
        window.location.replace("dashboard.html");
    }
});