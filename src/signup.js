const showpass = document.querySelectorAll(".showpass");
const signupForm = document.querySelector(".signupForm");
const emailError = document.querySelector("#emailError");
const emailinput = document.querySelector(".emailinput");
showpass.forEach((pass) => {
  const inputpass = pass.parentElement.querySelector("input");
  pass.addEventListener("click", () => {
    if (pass.src.includes("closedeye.svg")) {
      pass.src = "../svg/openeye.svg";
      inputpass.type = "text";
    } else {
      pass.src = "../svg/closedeye.svg";
      inputpass.type = "password";
    }
  });
});

emailinput.addEventListener("input", () => {
  emailError.classList.add("hidden");
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new URLSearchParams(new FormData(signupForm));

  try {
    const response = await fetch("/signup", {
      method: "POST",
      body: formData,
    });

    if (response.status === 409) {
      emailError.textContent = "Email is Already Registered.";
      emailError.classList.remove("hidden");
      return;
    }

    if (!response.ok) {
      emailError.textContent = "Something went wrong.";
      emailError.classList.remove("hidden");
      return;
    }

    window.location.href = "https://pdmmarilao.bond/login.html";
  } catch (error) {
    emailError.textContent = "Unable to connect to the server.";
    emailError.classList.remove("hidden");
  }
});
