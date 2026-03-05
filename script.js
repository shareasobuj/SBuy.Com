const products = [
    { id: 1, name: "HP Victus Gaming Laptop", price: 850, image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg" },
    { id: 2, name: "Sony WH-1000XM4", price: 348, image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg" },
    { id: 3, name: "Apple Watch Series 9", price: 399, image: "https://m.media-amazon.com/images/I/71Yv3L2S7vL._AC_SL1500_.jpg" },
    { id: 4, name: "Logitech G Pro Keyboard", price: 129, image: "https://m.media-amazon.com/images/I/71+6-D-aZpL._AC_SL1500_.jpg" }
];

let cart = [];

// Display Products
function init() {
    const container = document.getElementById('product-container');
    products.forEach(p => {
        container.innerHTML += `
            <div class="box">
                <img src="${p.image}" class="box-img">
                <h3>${p.name}</h3>
                <p style="font-weight:bold; margin: 10px 0;">$${p.price}</p>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Cart Logic
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
    alert(product.name + " added to cart!");
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsDiv = document.getElementById('cart-items');
    let total = 0;
    itemsDiv.innerHTML = "";
    cart.forEach(item => {
        total += item.price;
        itemsDiv.innerHTML += `<p>• ${item.name} - $${item.price}</p>`;
    });
    document.getElementById('total-price').innerText = total;
}

function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('active'); }

// Login Logic
function openLogin() { document.getElementById('login-modal').style.display = "block"; }
function closeLogin() { document.getElementById('login-modal').style.display = "none"; }
function handleLogin() {
    const email = document.getElementById('email').value;
    if(email) {
        document.getElementById('user-display').innerText = email.split('@')[0];
        closeLogin();
    }
}

// Checkout & Payment
function showPayment() {
    if(cart.length === 0) return alert("Cart is empty!");
    document.getElementById('payment-area').style.display = "block";
    document.getElementById('checkout-btn').style.display = "none";
}

function processPayment() {
    alert("Processing Payment... Thank you for shopping with SBuy!");
    cart = [];
    updateCart();
    toggleCart();
    document.getElementById('payment-area').style.display = "none";
    document.getElementById('checkout-btn').style.display = "block";
}

window.onclick = (e) => { if(e.target == document.getElementById('login-modal')) closeLogin(); }
init();
