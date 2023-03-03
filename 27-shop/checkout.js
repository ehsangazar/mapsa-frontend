const areYouLoggedIn = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // ARE YOU LOGGED IN
  if (!areYouLoggedIn()) {
    window.location.href = "login.html";
  }

  updateCartFromLocalStorage();
});
