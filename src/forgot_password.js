const emailinput = document.querySelector(".emailinput");
const forgotForm = document.querySelector(".forgotForm");
const emailError = document.querySelector(".emailError");
const successstatus = document.querySelector(".successstatus");
const resetBtn = document.querySelector("#resetBtn");
const resetBtnText = document.querySelector("#resetBtnText");
const resetLoading = document.querySelector("#resetLoading");
gsap.from(".forgotForm", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power3.out",
});
emailinput.addEventListener("input", () => {
  emailError.classList.add("hidden");
  successstatus.classList.add("hidden");
});

forgotForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  resetBtn.disabled = true;
  resetBtn.classList.add("opacity-70", "cursor-not-allowed");
  resetBtnText.classList.add("hidden");
  resetLoading.classList.remove("hidden");
  resetLoading.classList.add("flex");

  const formdata = new URLSearchParams(new FormData(forgotForm));

  try {
    const response = await fetch("/forgot_password", {
      method: "POST",
      body: formdata,
    });

    if (response.status === 404) {
      emailError.textContent = "Account Not Found";
      emailError.classList.remove("hidden");
      return;
    }

    successstatus.classList.remove("hidden");
  } catch (error) {
    console.error(error);
  } finally {
    resetBtn.disabled = false;
    resetBtn.classList.remove("opacity-70", "cursor-not-allowed");
    resetBtnText.classList.remove("hidden");
    resetLoading.classList.add("hidden");
    resetLoading.classList.remove("flex");
  }
});
