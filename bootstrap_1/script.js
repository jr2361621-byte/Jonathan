let cart = [];

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".checkout-btn").forEach(button => {
    button.addEventListener("click", function () {

      const name = this.dataset.name;
      const price = this.dataset.price;

      if (!name || !price) {
        alert("Missing product info!");
        return;
      }

      cart.push({ name, price });

      alert(`${name} added to cart`);

      updateCart();
    });
  });

});

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");

  if (!cartItems) return;

  cartItems.innerHTML = "";

  let sum = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(div);

    sum += Number(item.price);
  });

  total.innerText = "Total: $" + sum;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed!");
  cart = [];
  updateCart();
}