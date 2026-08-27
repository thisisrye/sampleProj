//Popup
const popup = document.getElementById("popup");

popup.style.display = "flex";

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

//Random message in array when page reloads
window.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Pizza",
        "Burger",
        "Mango",
        "Water Bottle",
        "Spoon",
        "Fork",
        "Rice",
        "Siomai",
        "Wonton",
        "Mami",
        "Noodles"
    ];

    const randomText = messages[Math.floor(Math.random() * messages.length)];

    document.querySelector(".header-comment").textContent = randomText;
});