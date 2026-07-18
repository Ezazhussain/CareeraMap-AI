/* CareerMap AI - Logout*/
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    const modal = document.getElementById("logoutModal");
    const cancelBtn = document.getElementById("cancelLogout");
    const confirmBtn = document.getElementById("confirmLogout");
    if (!logoutBtn || !modal) return;

    // Open Modal
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });

    // Cancel
    cancelBtn.addEventListener("click", () => {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
    });

    // Click outside
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("flex");
            modal.classList.add("hidden");
        }
    });

    // Logout
    confirmBtn.addEventListener("click", () => {
        localStorage.removeItem("cm_session");
        window.location.replace("login.html");
    });
});