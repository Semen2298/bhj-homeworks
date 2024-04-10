const dropdownValue = document.querySelector(".dropdown__value");
let dropdownValueContent = dropdownValue.textContent;
const dropdownLinks = document.querySelectorAll(".dropdown__link");
let dropdownList = document.querySelector(".dropdown__list")


dropdownLinks.forEach((dropdownLink) => {
    dropdownLink.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownValue.textContent = dropdownLink.textContent;
        dropdownValueContent = dropdownLink.textContent;
        dropdownList.classList.remove("dropdown__list_active");
    });
});
dropdownValue.addEventListener("click", () => {
    dropdownList.classList.toggle("dropdown__list_active");
});

