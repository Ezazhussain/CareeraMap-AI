/*CareerMap AI - Resume Builder*/
document.addEventListener("DOMContentLoaded", () => {
    initSidebar();
    initLivePreview();
    initTemplates();
    initDraft();
    initDownload();
});


/*Sidebar*/
function initSidebar() {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    if (!menuBtn || !sidebar || !overlay) return;
    menuBtn.addEventListener("click", () => {
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
    });
    overlay.addEventListener("click", closeSidebar);
    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", closeSidebar);
    });
    function closeSidebar() {
        if (window.innerWidth >= 1024) return;
        sidebar.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
    }
}


/*Live Resume Preview*/
function initLivePreview() {
    bindText("fullName", "previewName");
    bindText("email", "previewEmail");
    bindText("phone", "previewPhone");
    bindText("education", "previewEducation");
    bindSkills();
}

function bindText(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    if (!input || !preview) return;
    input.addEventListener("input", () => {
        preview.textContent = input.value.trim() || preview.dataset.placeholder;
    });
}

function bindSkills() {
    const input = document.getElementById("summary");
    const preview = document.getElementById("previewSummary");
    if (!input || !preview) return;
    input.addEventListener("input", () => {
        const skills = input.value
            .split(",")
            .map(skill => skill.trim())
            .filter(skill => skill !== "");
        preview.innerHTML = "";
        if (skills.length === 0) {
            preview.innerHTML = `
                <span class="text-slate-400">
                    HTML, CSS, JavaScript
                </span>
            `;
            return;
        }
        skills.forEach(skill => {
            const badge = document.createElement("span");
            badge.className =
                "inline-block px-3 py-1 mr-2 mb-2 rounded-full bg-blue-100 text-blue-700 text-sm";
            badge.textContent = skill;
            preview.appendChild(badge);
        });
    });
}