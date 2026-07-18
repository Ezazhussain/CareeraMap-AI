const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Toggle Sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
});

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


// Desktop Reset
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.add("hidden");
    }
});

// Suggested Question Buttons
const promptButtons = document.querySelectorAll(".prompt-btn");
const chatInput = document.getElementById("chatInput");
promptButtons.forEach(button => {
    button.addEventListener("click", () => {
        chatInput.value = button.textContent.trim();
        chatInput.focus();
    });
});

const chatContainer = document.getElementById("chatContainer");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typingIndicator");

// Send Message
function sendMessage() {
    if (chatInput.value.trim() === "") return;
    const userMessage = `
    <div class="flex justify-end">
        <div>
            <div class="bg-blue-600 text-white rounded-2xl rounded-tr-md p-4 max-w-xl">
                ${chatInput.value}
            </div>
        </div>
    </div>
    `;
    chatContainer.insertAdjacentHTML("beforeend", userMessage);
    chatInput.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;
    typing.classList.remove("hidden");
    setTimeout(() => {
        typing.classList.add("hidden");
        const aiReply = `
        <div class="flex gap-4">
            <div class="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <i class="fa-solid fa-robot"></i>
            </div>

            <div>
                <div class="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm max-w-2xl">
                    Thanks! I'm currently a frontend prototype.
                    Later this page will connect to the CareerMap AI backend
                    to generate real AI responses.
                </div>
            </div>
        </div>
        `;
        chatContainer.insertAdjacentHTML("beforeend", aiReply);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1500);
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});