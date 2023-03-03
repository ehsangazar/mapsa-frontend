let products = [];
let productsInCart = [];
let cartItems = [];

const fetchProducts = async () => {
  const responseJSON = await fetch("https://fakestoreapi.com/products");
  const response = await responseJSON.json();
  return response;
};

const updateProductsInCart = () => {
  let productHTML = "";
  productsInCart.forEach((product) => {
    productHTML += `
        <li>
            <div class="product">
            <img
                src="${product.image}"
                alt="product"
            />
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>Price: ${product.price}</p>
            </div>
            </div>
        </li>
    `;
  });
  document.querySelector(".productsInCart").innerHTML = productHTML;
};

document.getElementById("checkout").addEventListener("click", () => {
  if (cartItems.length === 0) {
    return;
  }
  // REPLACE
  window.location.href = "checkout.html";
  // PUSH
  // window.location.pushState("checkout.html");
});

document.addEventListener("DOMContentLoaded", async () => {
  products = await fetchProducts();
  updateCartFromLocalStorage();

  productsInCart = products.filter((product) => {
    return cartItems.includes(product.id);
  });
  updateProductsInCart();
});
