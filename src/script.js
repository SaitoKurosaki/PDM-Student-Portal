const date = document.querySelector("#date");
const asidebar = document.querySelector(".asidebar");
const burgerbtn = document.querySelector(".burgerbtn");
const closebtn = document.querySelector(".closebtn");
const overlay = document.querySelector(".aside-overlay");

gsap.from(".mainhead", {
  x: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

date.textContent = new Date().getFullYear();

burgerbtn.addEventListener("click", () => {
  asidebar.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});

closebtn.addEventListener("click", () => {
  asidebar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  asidebar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});
