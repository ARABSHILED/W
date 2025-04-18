let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price} جنيه`;
        cartItems.appendChild(listItem);
    });

    totalPriceElement.textContent = `الإجمالي: ${totalPrice} جنيه`;
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("سلتك فارغة. أضف منتجات أولاً.");
        return;
    }

    document.getElementById("checkoutForm").style.display = "block";
    document.getElementById("products").value = JSON.stringify(cart);
    document.getElementById("total").value = totalPrice;
}