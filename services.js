//STORE PLANS IN LOCAL AND SEND DATA TO PHP

function addToCart(serviceName, price) {
    let selectedService = {
        name: serviceName,
        price: price
    };

    //LOCAL STORAGE

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedService);
    localStorage.setItem("cart", JSON.stringify(cart));

    //PHP
    fetch("save_service.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedService)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("Service saved successfully!");
        } else {
            console.log("Error saving service:", data.error);
        }
    })
    .catch(error => console.error("Fetch Error:", error));

    //REDIRECT TO CART PAGE
    window.location.href = "cart.html";
}

//BACK-ARROW REDIRECTS TO PREVIOUS PAGE

document.querySelectorAll(".select-plan-btn").forEach(button => {
    button.addEventListener("click", () => {
        sessionStorage.setItem("previousPage", window.location.href);
    });
});