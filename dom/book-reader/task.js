const book = document.querySelector(".book");
const fontsSize = document.querySelectorAll(".font-size");
const colorsText = document.querySelectorAll(".book__control_color .color");
const colorsBack = document.querySelectorAll(".book__control_background .color");


fontsSize.forEach((fontSize) => {
    fontSize.addEventListener('click', (e) => {
        e.preventDefault();
        book.classList.remove("font-size_small", "font-size_big")

        fontsSize.forEach((el) => el.classList.remove('font-size_active'));

        if(fontSize.dataset.size == "small") {
            book.classList.add('font-size_small')
        }
        if(fontSize.dataset.size == "big") {
            book.classList.add('font-size_big')
        }
        fontSize.classList.add('font-size_active');
    })
})
colorsText.forEach((colorText) => {
    colorText.addEventListener('click', (e) => {
        e.preventDefault();
        colorsText.forEach(el => el.classList.remove("color_active"))
        switch (colorText.dataset.textColor) {
            case "black":
                book.style.color = "black"
                break;
            case "gray":
                book.style.color = "gray"
                break;
            case "whitesmoke":
                book.style.color = "whitesmoke"
                break;
            default:
                break;
        }
        colorText.classList.add("color_active")
    })
})
colorsBack.forEach((colorBack) => {
    colorBack.addEventListener('click', (e) => {
        e.preventDefault();
        colorsBack.forEach(el => el.classList.remove("color_active"))
        switch (colorBack.dataset.bgColor) {
            case "black":
                book.style.background = "black"
                break;
            case "gray":
                book.style.background = "gray"
                break;
            case "whitesmoke":
                book.style.background = "whitesmoke"
                break;
            default:
                break;
        }
        colorBack.classList.add("color_active")
    })
})