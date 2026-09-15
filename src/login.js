const showpass = document.querySelector(".showpass");
const inputpass = document.querySelector(".inputpass");
const loginForm = document.querySelector(".loginForm");
const emailError = document.querySelector("#emailError");
const emailinput = document.querySelector(".emailinput");
const passwordError = document.querySelector(".passwordError");
showpass.addEventListener("click", () => {
  if (showpass.src.includes("closedeye.svg")) {
    showpass.src = "../svg/openeye.svg";
    inputpass.type = "text";
  } else {
    showpass.src = "../svg/closedeye.svg";
    inputpass.type = "password";
  }
});

emailinput.addEventListener("input", () => {
  emailError.classList.add("hidden");
});

inputpass.addEventListener("input", () => {
  passwordError.classList.remove("hidden");
});
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formdata = new URLSearchParams(new FormData(loginForm));

  try {
    const response = await fetch("/login", {
      method: "POST",
      body: formdata,
    });
    if (response.status === 404) {
      emailError.textContent = "Account Not Found.";
      emailError.classList.remove("hidden");
      return;
    }

    if (response.status === 401) {
      passwordError.textContent = "Incorrect Password.";
      passwordError.classList.remove("hidden");
      return;
    }

    if (!response.ok) {
      emailError.textContent = "Something went wrong.";
      emailError.classList.remove("hidden");
    }
  } catch (error) {
    console.error(error);
    emailError.textContent = "Unable to connect to the server.";
    emailError.classList.remove("hidden");
  }
});
