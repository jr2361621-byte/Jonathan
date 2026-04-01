function go(page){
  window.location.href = page;
}

function goToCategories(){
  window.location.href = 'categories.html';
}

function goToCheckout(){
  window.location.href = 'checkout.html';
}

const grid = document.getElementById('grid');
if(grid){
  for(let i=1;i<=25;i++){
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="images/p${i}.jpg">
      <p>Product ${i}</p>
      <button onclick="addToCart(${i})">Add to Bag</button>
    `;
    grid.appendChild(div);
  }
}

function placeOrder(e){
  e.preventDefault();
  alert('Order placed successfully');
  localStorage.removeItem('cart');
}


// ================= JS/CART.JS =================
function getCart(){
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart){
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id){
  const cart = getCart();
  cart.push({id, qty:1});
  saveCart(cart);
  alert('Added to bag');
}

const cartDiv = document.getElementById('cart');
if(cartDiv){
  const cart = getCart();
  cart.forEach(item => {
    const p = document.createElement('p');
    p.textContent = `Product ${item.id}`;
    cartDiv.appendChild(p);
  });
}


// ================= JS/SLIDESHOW.JS =================
const images = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg'
];

let i = 0;

function changeBg(){
