const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// Open Sidebar
function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("opacity-0", "invisible");
    overlay.classList.add("opacity-100", "visible");
    document.body.classList.add("overflow-hidden");
}

// Close Sidebar
function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-100", "visible");
    overlay.classList.add("opacity-0", "invisible");
    document.body.classList.remove("overflow-hidden");
}

// Buttons
menuBtn?.addEventListener("click", openSidebar);
closeBtn?.addEventListener("click", closeSidebar);
overlay?.addEventListener("click", closeSidebar);

// Automatically close when resizing to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        closeSidebar();
    }
});


// Close when screen becomes desktop size
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.add("hidden");
    }
});