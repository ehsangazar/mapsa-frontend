let product = {};
let cartItems = [];

const getSingleProduct = async () => {
  const searchParams = new URLSearchParams(location.search);
  const responseJSON = await fetch(
    `https://fakestoreapi.com/products/${searchParams.get("id")}`
  );
  const response = await responseJSON.json();
  return response;
};

const updateProduct = () => {
  const checkIfInCart = cartItems.includes(product.id);
  const productHTML = `
    <div class="singleProduct">
        <div class="product__image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product__info">
            <h1 class="product__title">${product.title}</h1>
            <p class="product__description">${product.description}</p>
            <p class="product__price">${product.price} kr</p>
            <button class="product__button  ${
              checkIfInCart ? "cart--added" : ""
            }">${checkIfInCart ? "Added" : "Add to cart"}</button>
        </div>
    </div>
    `;
  document.querySelector(".singleProduct").innerHTML = productHTML;
};

document.addEventListener("DOMContentLoaded", async () => {
  updateCartFromLocalStorage();
  product = await getSingleProduct();
  updateProduct();
});
