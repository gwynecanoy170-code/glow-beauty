// Our shopping cart
let cart = [];

// Total price
let total = 0;


// Add product to cart
function addToCart(name, price) {

    // Add product
    cart.push({
        name: name,
        price: price
    });

    // Add price to total
    total = total + price;

    // Show cart
    displayCart();
}


// Display cart
function displayCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    // Show each product
    cart.forEach(function(product, index) {

        cartItems.innerHTML += `
            <div class="cart-item">

                ${product.name} - ₱${product.price}

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;

    });

    // Show total
    document.getElementById("total").textContent = total;
}


// Remove product
function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    displayCart();
}


// Clear all products from cart
function clearCart() {

    // Empty the cart
    cart = [];

    // Reset total price
    total = 0;

    // Update the cart display
    displayCart();
}


// Go to products section
function goToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}