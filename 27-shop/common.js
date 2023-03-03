const updateCartFromLocalStorage = () => {
  cartItems = localStorage.getItem("cart");
  cartItems = cartItems ? cartItems.split(",").map(Number) : [];
  document.getElementById("cart").innerHTML = cartItems.length;
};
const updateUser = () => {
  const userLocalStorage = localStorage.getItem("user");
  const user = JSON.parse(userLocalStorage); // oppsite of JSON.stringify
  if (user && document.getElementById("user")) {
    document.getElementById("user").innerHTML = user.name;
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  updateCartFromLocalStorage();
  updateUser();
});
