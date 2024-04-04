const clickCount = document.getElementById("clicker__counter");
const imgCookie = document.getElementById("cookie");
let clickCountContent = parseInt(clickCount.textContent);
let cookieSizeIncreased = true;

imgCookie.addEventListener('click', () => {
    clickCount.textContent = ++clickCountContent;
    if (cookieSizeIncreased) {
        imgCookie.style.width = "250px";
    } else {
        imgCookie.style.width = "200px";
    }
    cookieSizeIncreased = !cookieSizeIncreased; // переключаем флаг для следующего клика
});