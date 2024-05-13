const signin = document.querySelector(".signin");
const btn = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const userId = document.getElementById("user_id");
const deauth = document.querySelector(".deauth");

const input = form.querySelectorAll('input');

function auth() {
    userId.textContent = localStorage.getItem("userId")
    signin.classList.remove("signin_active")
    document.querySelector(".welcome").classList.add("welcome_active")
    deauth.classList.add("deauth-active");
}
deauth.addEventListener("click", () => {
    localStorage.removeItem("userId")
    location.reload();
})

if (localStorage.getItem("userId")) {
    auth();
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action)

    xhr.onload = function() {
        const response = JSON.parse(xhr.response);
        if (response.success === true) {
            localStorage.setItem("userId", response.user_id)
            auth()
            input.forEach(input => input.value = "");
        } else {
            alert("Неверный логин/пароль")
        }
    }
    xhr.onerror = function() {
        alert("Ошибка соединения")
    }

    xhr.send(formData)
})

