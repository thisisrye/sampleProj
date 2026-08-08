const popup = document.getElementById("popup");

popup.style.display = "flex";

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});