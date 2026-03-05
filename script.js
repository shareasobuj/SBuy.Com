// Sample Product Data
const products = [
    { id: 1, name: "Gaming Laptop", price: 999, image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg" },
    { id: 2, name: "Wireless Headphone", price: 199, image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg" },
    { id: 3, name: "Smart Watch", price: 149, image: "https://m.media-amazon.com/images/I/71Yv3L2S7vL._AC_SL1500_.jpg" },
    { id: 4, name: "Mechanical Keyboard", price: 89, image: "https://m.media-amazon.com/images/I/71+6-D-aZpL._AC_SL1500_.jpg" }
];

let cart = [];

// Load Products
const productContainer = document.getElementById('product-container');

function displayProducts() {
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="box">
                <div class="box-content">
                    <h2>${product.name}</h2>
                    <div class="box-img" style="background-image: url('${product.image}')"></div>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Cart Functions
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <p>${item.name}</p>
                <p>$${item.price}</p>
            </div>
        `;
    });
    totalDisplay.innerText = total;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

displayProducts();
