const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    const viewportHeight = window.innerHeight;
    for (let i = 0; i < reveals.length; i++) {
        const element = reveals[i];
        const elementTop = element.getBoundingClientRect().top;
        console.log(elementTop)
        if (elementTop < viewportHeight) {
            element.classList.add("reveal_active")
        } else {
            element.classList.remove("reveal_active")
        }
    }
})