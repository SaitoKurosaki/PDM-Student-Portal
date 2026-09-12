const burgerbtn = document.querySelector(".burgerbtn");
const closebtn = document.querySelector(".closebtn");
const asidebar = document.querySelector(".asidebar");
const overlay = document.querySelector(".aside-overlay");
const editProfileBtn = document.querySelector(".edit-profile-btn");
const profileOverlay = document.querySelector(".profile-overlay");
const profileModal = document.querySelector(".profile-modal");
const profileCloseBtn = document.querySelector(".profile-close-btn");
const profileCancelBtn = document.querySelector(".profile-cancel-btn");
const changePhotoBtn = document.querySelector(".change-photo-btn");
const photoInput = document.querySelector(".photo-input");
const profilePhoto = document.querySelector(".profile-photo");
burgerbtn.addEventListener("click", () => {
  asidebar.classList.remove("-translate-x-full");

  overlay.classList.remove("hidden");
});

closebtn.addEventListener("click", () => {
  asidebar.classList.add("-translate-x-full");

  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  asidebar.classList.add("-translate-x-full");

  overlay.classList.add("hidden");
});

editProfileBtn.addEventListener("click", () => {
  profileModal.classList.remove("hidden");

  profileOverlay.classList.remove("hidden");
});

profileCloseBtn.addEventListener("click", () => {
  profileModal.classList.add("hidden");

  profileOverlay.classList.add("hidden");
});

profileCancelBtn.addEventListener("click", () => {
  profileModal.classList.add("hidden");

  profileOverlay.classList.add("hidden");
});

profileOverlay.addEventListener("click", () => {
  profileModal.classList.add("hidden");

  profileOverlay.classList.add("hidden");
});

changePhotoBtn.addEventListener("click", () => {
  photoInput.click();
});

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];

  if (!file) {
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("The image must be 5MB or smaller.");
    photoInput.value = "";
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    profilePhoto.src = reader.result;

    profilePhoto.classList.remove(
      "h-20",
      "w-20",
      "object-contain",
      "sm:h-24",
      "sm:w-24",
    );

    profilePhoto.classList.add("h-full", "w-full", "object-cover");
  });

  reader.readAsDataURL(file);
});
