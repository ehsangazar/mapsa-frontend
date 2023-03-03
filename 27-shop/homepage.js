let cartItems = [];
let products = [];

const fetchProducts = async () => {
  const responseJSON = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  const response = await responseJSON.json();
  return response;
};

const updateProducts = () => {
  let productHTML = "";
  products.forEach((product) => {
    const checkIfInCart = cartItems.includes(product.id);
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
                <button 
                class="addToCart ${checkIfInCart ? "cart--added" : ""}" 
                data-id="${product.id}">
                ${checkIfInCart ? "ADDED" : "Add to Cart"}
                </button>
                <a 
                href="./product.html?id=${product.id}"
                class="addToCart" 
                data-id="${product.id}">
                  SHOW
                </a>
            </div>
            </div>
        </li>
    `;
  });
  document.querySelector(".products").innerHTML = productHTML;
};

const updateCart = (productId) => {
  cartItems.push(productId);
  localStorage.setItem("cart", cartItems);
  document.getElementById("cart").innerHTML = cartItems.length;
};

const addEventListenersToAddToCart = () => {
  document.querySelectorAll(".addToCart").forEach((buttonNode) => {
    buttonNode.addEventListener("click", (event) => {
      //   const productId = event.target.getAttribute("data-id");
      const productId = event.target.dataset.id;
      if (cartItems.includes(Number(productId))) return;
      updateCart(Number(productId));
      event.target.disabled = true;
      updateProducts();
      addEventListenersToAddToCart();
    });
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  products = await fetchProducts();
  updateCartFromLocalStorage();
  updateProducts();
  addEventListenersToAddToCart();
});
