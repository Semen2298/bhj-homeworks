// const items = document.getElementById("items");
// const loader = document.getElementById("loader");
// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

// xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         loader.classList.remove("loader_active");
        
//         const response = JSON.parse(xhr.responseText);
//         const valute = response.response.Valute;
//         for (const currency in valute) {
//             if (valute.hasOwnProperty(currency)) {
//                 const currencyData = valute[currency];

//                 const div = document.createElement("div");
//                 div.classList.add("item");

//                 div.innerHTML = `
//                     <div class="item__code">${currencyData.CharCode}</div>
//                     <div class="item__value">${currencyData.Value}</div>
//                     <div class="item__currency">${currencyData.Name}</div>
//                 `;

//                 items.appendChild(div);
//             }
//         }
//     }
// });

// xhr.send();


const items = document.getElementById("items");
const loader = document.getElementById("loader");
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.onerror = function() {
    alert("Запрос не удался");
};

xhr.onload = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
        loader.classList.remove("loader_active");
        const response = JSON.parse(xhr.responseText);
        const valute = response.response.Valute;
        for (const currency in valute) {
            if (valute.hasOwnProperty(currency)) {
                const currencyData = valute[currency];

                const div = document.createElement("div");
                div.classList.add("item");

                div.innerHTML = `
                    <div class="item__code">${currencyData.CharCode}</div>
                    <div class="item__value">${currencyData.Value}</div>
                    <div class="item__currency">${currencyData.Name}</div>
                `;

                items.appendChild(div);
            }
        }
    }
};