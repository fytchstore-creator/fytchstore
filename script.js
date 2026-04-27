document.addEventListener("DOMContentLoaded", () => {

let cart = [];
let current = 0;

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dots span");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  current = index;
}

window.goSlide = function(i) { showSlide(i); };

setInterval(() => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
}, 4000);

// CART
document.querySelectorAll(".btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const name = document.querySelectorAll(".product h3")[i].innerText;
    const price = parseInt(document.querySelectorAll(".product p")[i].innerText.replace("₹",""));

    cart.push({name, price});
    updateCart();
    toggleCart();
  });
});

function updateCart() {
  const items = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  items.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    items.innerHTML += `<div>${item.name} ₹${item.price}</div>`;
  });

  totalEl.innerText = total;
}

window.toggleCart = function() {
  document.getElementById("cartDrawer").classList.toggle("active");
  document.getElementById("cartOverlay").classList.toggle("active");
}

window.goToCheckout = function() {
  window.location.href = "https://fytchstore.myshopify.com/cart";
}

});