let cart = [];
let totalPrice = 0;

function addToCart(title, price, quantity) {
    const item = { title, price, quantity: parseInt(quantity) };
    cart.push(item);
    totalPrice += price * item.quantity;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.title} - $${item.price} x ${item.quantity}</p>`;
    });
    document.getElementById('total-price').innerText = `$${totalPrice}`;
}

function checkout() {
    const deliveryLocation = document.getElementById('delivery-location').value;
    if (!deliveryLocation) {
        alert('Please enter a delivery location.');
        return;
    }
    alert(`Checkout successful! Your books will be delivered to: ${deliveryLocation}`);
    // Reset cart
    cart = [];
    totalPrice = 0;
    displayCart();
}
