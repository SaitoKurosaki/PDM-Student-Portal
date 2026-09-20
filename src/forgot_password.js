const emailinput = document.querySelector(".emailinput");
const forgotForm = document.querySelector(".forgotForm");
const emailError = document.querySelector("#emailError");

emailinput.addEventListener("input", () => {
  emailError.classList.add("hidden");
});
forgotForm.addEventListener("submit", async (event) => {
  event.preventDefault();

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
  } catch (error) {
    console.error(error);
  }
});
