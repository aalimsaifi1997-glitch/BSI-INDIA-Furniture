let cartCount = 0;


/* MOBILE MENU */

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("show");
}


/* ADD TO CART */

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " added to cart!");
}


/* CART */

function showCart() {

    if (cartCount === 0) {
        alert("Your cart is empty.");
    } else {
        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );
    }
}


/* PRODUCT FILTER */

function filterProducts(category, button) {

    const products =
        document.querySelectorAll(".product-card");

    const buttons =
        document.querySelectorAll(".filter");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


/* NEWSLETTER */

function subscribe(event) {

    event.preventDefault();

    alert("Thank you for subscribing to WoodNest!");

    event.target.reset();
}


/* HEART BUTTON */

document.querySelectorAll(".heart").forEach(button => {

    button.addEventListener("click", function() {

        if (this.textContent === "♡") {
            this.textContent = "♥";
            this.style.color = "#a45a45";
        } else {
            this.textContent = "♡";
            this.style.color = "";
        }

    });

});