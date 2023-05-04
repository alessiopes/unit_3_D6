// Sostituisce l'icona oulined con quella fill al passaggio del mouse
const heartIcons = document.querySelectorAll(".bi-heart");

heartIcons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
    });

    icon.addEventListener("mouseout", () => {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
    });
});