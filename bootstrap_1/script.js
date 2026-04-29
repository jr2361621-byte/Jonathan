let cart = [];
let cartCount = 0;

// HANDLE ALL ADD TO CART BUTTONS
document.querySelectorAll(".checkout-btn").forEach(button => {
  button.addEventListener("click", function () {

    const section = button.closest(".checkout");
    const name = section.querySelector("h2").innerText;
    const price = section.querySelector(".price").innerText;

    let size = "N/A";
    const selectedSize = section.querySelector(".sizes .selected");

    if (selectedSize) {
      size = selectedSize.innerText;
    }

    // REQUIRE SIZE IF IT EXISTS
    if (section.querySelector(".sizes") && !selectedSize) {
      alert("Please select a size!");
      return;
    }

    // ADD ITEM
    cart.push({ name, price, size });
    cartCount++;

    // MESSAGE SYSTEM (your logic but improved)
    let message;
    if (cartCount >= 1 && cartCount < 5) {
      message = "Item added to bag! Total items: " + cartCount;
    } else {
      message = "Your bag has many items! Total: " + cartCount;
    }

    console.log("Cart:", cart);
    alert(message);

    // BUTTON FEEDBACK
    button.innerText = "✔ Added";
    setTimeout(() => {
      button.innerText = "Add to Cart";
    }, 1500);

    updateCart();
  });
});

// SIZE SELECTION
document.querySelectorAll('.sizes').forEach(group => {
  group.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
});

// UPDATE CART UI
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");

  if (!cartItems) return;

  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.innerText = `${item.name} (${item.size}) - ${item.price}`;
    cartItems.appendChild(div);

    totalPrice += parseFloat(item.price.replace("$", ""));
  });

  total.innerText = "Total: $" + totalPrice;
}

// CHECKOUT
function checkout() {
  if (cart.length === 0) {
    alert("Your bag is empty!");
    return;
  }

  alert("Order placed!");
  cart = [];
  cartCount = 0;
  updateCart();
}

document.querySelectorAll('.sizes').forEach(group => {
  group.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
});