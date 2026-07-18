// Sidebar
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");


// Create Overlay
const overlay = document.createElement("div");
overlay.className =
"fixed inset-0 bg-black/40 z-40 hidden lg:hidden";
document.body.appendChild(overlay);


// Open Sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
});


// Close Sidebar
overlay.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
});


// Desktop Resize Fix
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        overlay.classList.add("hidden");
        sidebar.classList.remove("-translate-x-full");
    } else {
        sidebar.classList.add("-translate-x-full");
    }
});