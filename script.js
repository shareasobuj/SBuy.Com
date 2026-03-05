const products = [
    { id: 1, name: "HP Victus Gaming", price: 899, img: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg" },
    { id: 2, name: "Sony Headphones", price: 299, img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg" },
    { id: 3, name: "Smart Watch V8", price: 150, img: "https://m.media-amazon.com/images/I/71Yv3L2S7vL._AC_SL1500_.jpg" },
    { id: 4, name: "Logitech Keyboard", price: 89, img: "https://m.media-amazon.com/images/I/71+6-D-aZpL._AC_SL1500_.jpg" }
];

let cart = [];

// Page Switcher Function
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0,0);
}

// Load Products on Deals Page
function loadProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = products.map(p => `
        <div class="box">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p><strong>$${p.price}</strong></p>
            <button class="btn-yellow" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Cart System
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('cart-total-price');
    
    itemsDiv.innerHTML = cart.map(item => `
        <div style="border-bottom:1px solid #ddd; padding:10px 0;">
            <p>${item.name}</p>
            <p><strong>$${item.price}</strong></p>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDiv.innerText = total;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

// Initialize
loadProducts();
