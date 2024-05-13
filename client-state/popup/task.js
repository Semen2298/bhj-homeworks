const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");

if (document.cookie === "close=true") {
    modal.classList.remove("modal_active");
} else {
    modal.classList.add("modal_active");
}
close.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    document.cookie = "close=true"
})
