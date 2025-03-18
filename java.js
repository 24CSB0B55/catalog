// Retrieve cart from local storage or initialize an empty one
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update cart display on cart.html
function updateCartDisplay() {
    const cartItemsList = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (cartItemsList) {
        cartItemsList.innerHTML = ""; // Clear previous items
        let total = 0;

        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
            total += parseFloat(item.price);
        });

        cartTotal.textContent = total.toFixed(2);
    }
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll(".addToCart").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let name = this.getAttribute("data-name");
        let price = this.getAttribute("data-price");

        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${name} added to cart!`);
    });
});

// Function to clear cart
function clearCart() {
    localStorage.removeItem("cart"); // Remove cart from storage
    cart = []; // Reset cart array
    updateCartDisplay(); // Refresh cart display
}

// Add event listener to "Clear Cart" button
const clearCartBtn = document.getElementById("clearCart");
if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
}

// Call updateCartDisplay if on cart.html
if (document.getElementById("cartItems")) {
    updateCartDisplay();
}

// Call updateCartDisplay if on cart.html
if (document.getElementById("cartItems")) {
    updateCartDisplay();
}
function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  window.onclick = function(event) {
    const modal = document.getElementById('subscribeModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  function displayDate(){
    document.getElementById("demo").innerHTML=Date();
  }
