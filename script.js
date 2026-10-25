let cart = [];
let wishlist = [];

function addToCart(name, price) {
cart.push({ name, price });

document.getElementById("cart-count").textContent = cart.length;

alert(name + " added to your cart! 🛒");

}

function showCart() {
if (cart.length === 0) {
alert("Your cart is empty!");
return;
}

let message = "Your Cart:\n\n";
let total = 0;

cart.forEach(function(item, index) {
    message += (index + 1) + ". " + item.name + " - ₹" + item.price + "\n";
    total += item.price;
});

message += "\nTotal: ₹" + total;
alert(message);

}

function addToWishlist(name) {
if (wishlist.includes(name)) {
alert(name + " is already in your wishlist!");
return;
}

wishlist.push(name);
alert(name + " added to your wishlist ❤️");

}

document.getElementById("search").addEventListener("input", function() {
let searchText = this.value.toLowerCase();
let products = document.querySelectorAll(".product");

products.forEach(function(product) {
    let productName = product.querySelector("h3").textContent.toLowerCase();

    product.style.display = productName.includes(searchText) ? "" : "none";
});

});