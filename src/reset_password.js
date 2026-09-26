const resetForm = document.querySelector(".resetForm");
const showpass = document.querySelector(".showpass");
const inputpass = document.querySelector(".inputpass");
const successstatus = document.querySelector(".successstatus");
const resetBtn = document.querySelector("#resetBtn");
const resetBtnText = document.querySelector("#resetBtnText");
const resetLoading = document.querySelector("#resetLoading");

const params = new URLSearchParams(window.location.search);

const token = params.get("token");

showpass.addEventListener("click", () => {
  if (showpass.src.includes("closedeye.svg")) {
    showpass.src = "/svg/openeye.svg";
    inputpass.type = "text";
  } else {
    showpass.src = "/svg/closedeye.svg";
    inputpass.type = "password";
  }
});

inputpass.addEventListener("input", () => {
  successstatus.classList.add("hidden");
});
document.addEventListener("DOMContentLoaded", async () => {
  if (!token) {
    window.location.href = "index.html";
    return;
  }

  const response = await fetch(
    `http://127.0.0.1:3000/check_reset_token?token=${token}`,
  );

  if (!response.ok) {
    window.location.href = "index.html";
  }
});

resetForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  resetBtn.disabled = true;
  resetBtn.classList.add("opacity-70", "cursor-not-allowed");
  resetBtnText.classList.add("hidden");
  resetLoading.classList.remove("hidden");
  resetLoading.classList.add("flex");
  const formdata = new URLSearchParams(new FormData(resetForm));

  formdata.append("token", token);

  try {
    const response = await fetch("/reset_password", {
      method: "POST",
      body: formdata,
    });

    if (!response.ok) {
      emailError.textContent = "Something went wrong.";
      emailError.classList.remove("hidden");
      return;
    }
    successstatus.classList.remove("hidden");
  } catch (error) {
    return;
  } finally {
    resetBtn.disabled = false;
    resetBtn.classList.remove("opacity-70", "cursor-not-allowed");
    resetBtnText.classList.remove("hidden");
    resetLoading.classList.add("hidden");
    resetLoading.classList.remove("flex");
  }
});
