// descriptive variables
let cartCount = 0; // integer
let storeName = "CIELO"; // string

// select button
let addToCartButton = document.querySelector(".checkout-btn");

addToCartButton.addEventListener("click", function () {

    cartCount = cartCount + 1; // mathematical operation

    let message;

    // decision structure + logical operator
    if (cartCount >= 1 && cartCount < 5) {
        message = "Item added to cart! Total items: " + cartCount;
    } else {
        message = "Your cart has many items! Total: " + cartCount;
    }

    // console output
    console.log("Cart Count:", cartCount);

    // screen output
    alert(message);
});