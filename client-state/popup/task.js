const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

if (getCookie("close") === "true") {
    modal.classList.remove("modal_active");
} else {
    modal.classList.add("modal_active");
}
close.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    document.cookie = "close=true"
})
