/*CareerMap AI - Authentication Guard*/
document.addEventListener("DOMContentLoaded", () => {
    const session = JSON.parse(localStorage.getItem("cm_session"));
    if (!session || !session.loggedIn) {
        alert("Please login first.");
        window.location.replace("login.html");
        return;
    }
        const userName = document.getElementById("userName");
        if (userName) {
        userName.textContent = session.name;
    }
});

history.pushState(null, "", location.href);
window.addEventListener("popstate", () => {
    history.pushState(null, "", location.href);
});

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        window.location.reload();
    }
});
