document.addEventListener("DOMContentLoaded", () => {

let cart = [];
let index = 0;

const slides = document.querySelector(".slides");

// SLIDER SAFE
if (slides) {
  setInterval(() => {
    index++;
    slides.style.transform = `translateX(-${index * 100}%)`;
    if (index >= 2) index = 0;
  }, 3000);
}

// ADD TO CART
document.querySelectorAll(".btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const name = document.querySelectorAll(".product h3")[i].innerText;
    const price = parseInt(document.querySelectorAll(".product p")[i].innerText.replace("₹",""));

    cart.push({name, price});
    updateCart();
    toggleCart();
  });
});

// UPDATE CART
function updateCart() {
  const items = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (!items) return;

  items.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    items.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
        <button onclick="removeItem(${i})">X</button>
      </div>
    `;
  });

  totalEl.innerText = total;
}

// REMOVE ITEM
window.removeItem = function(i) {
  cart.splice(i,1);
  updateCart();
}

// TOGGLE CART
window.toggleCart = function() {
  document.getElementById("cartDrawer").classList.toggle("active");
  document.getElementById("cartOverlay").classList.toggle("active");
}

// CLOSE ON OVERLAY
document.getElementById("cartOverlay").addEventListener("click", toggleCart);

// CHECKOUT (CHANGE THIS)
window.goToCheckout = function() {
  window.location.href = "https://fytchstore.myshopify.com/cart";
}

});