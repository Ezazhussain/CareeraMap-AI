// Mobile Menu

// Mobile Navigation

const mobileBtn = document.getElementById("mobileBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("scale-95");
    mobileMenu.classList.toggle("-translate-y-4");
    mobileMenu.classList.toggle("pointer-events-none");

});

const lines = document.querySelectorAll(".line");

mobileBtn.addEventListener("click", () => {

    lines[0].classList.toggle("rotate-45");
    lines[0].classList.toggle("translate-y-2");

    lines[1].classList.toggle("opacity-0");

    lines[2].classList.toggle("-rotate-45");
    lines[2].classList.toggle("-translate-y-2");

});

/* ==========================
    AI Career Coach
========================== */

const typingDots=document.getElementById("typingDots");
const aiResult=document.getElementById("aiResult");
const aiSection=document.querySelector("#ai-coach");
const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
    if(entry.isIntersecting){
    setTimeout(()=>{

typingDots.style.display="none";

aiResult.classList.add("show");

    },2200);
}
});
},{threshold:.4});
observer.observe(aiSection);

/* ===========================
        FAQ
=========================== */

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
    const button = item.querySelector(".faq-btn");
    const content = item.querySelector(".faq-content");
    button.addEventListener("click", () => {
        faqItems.forEach((other) => {
            if (other !== item) {
                other.classList.remove("active");
                other.querySelector(".faq-content").style.maxHeight = null;
            }
        });

        item.classList.toggle("active");
        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});

/* ==========================
        Theme Toggle
========================== */
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    html.classList.add("dark");
}
themeToggle.addEventListener("click",()=>{
    html.classList.toggle("dark");
    if(html.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
});