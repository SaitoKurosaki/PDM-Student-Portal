const resetForm = document.querySelector(".resetForm");
const showpass = document.querySelector(".showpass");
const inputpass = document.querySelector(".inputpass");
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
document.addEventListener("DOMContentLoaded", async () => {
  if (!token) {
    window.location.href = "index.html";
    return;
  }

  const response = await fetch(`/check_reset_token?token=${token}`);

  if (!response.ok) {
    window.location.href = "index.html";
  }
});

resetForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formdata = new URLSearchParams(new FormData(resetForm));

  formdata.append("token", token);

  try {
    const response = await fetch("/reset_password", {
      method: "POST",
      body: formdata,
    });

    console.log(response);
  } catch (error) {
    return;
  }
});
