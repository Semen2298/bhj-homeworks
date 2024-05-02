const btnsMinus = document.querySelectorAll(".product__quantity-control_dec");
const btnsPlus = document.querySelectorAll(".product__quantity-control_inc");
const productQuantityValue = document.querySelectorAll(".product__quantity-value");

const cartProducts = document.querySelector(".cart__products");
const productAdds = document.querySelectorAll(".product__add");
const productImages = document.querySelectorAll(".product__image");


btnsMinus.forEach((btnMinus, index) => {
    btnMinus.addEventListener('click', () => {
        let numMinus = parseInt(productQuantityValue[index].textContent);
        if (numMinus > 1) {
            productQuantityValue[index].textContent = --numMinus;
        }
    })
})
btnsPlus.forEach((btnPlus, index) => {
    btnPlus.addEventListener('click', () => {
        let numPlus = parseInt(productQuantityValue[index].textContent);
        productQuantityValue[index].textContent = ++numPlus;
    })
})

productAdds.forEach((productAdd, index) => {
    productAdd.addEventListener('click', () => {
        let id = productAdd.closest(".product").dataset.id
        let src =  productImages[index].getAttribute("src");
        let quantity = parseInt(productQuantityValue[index].textContent);

        let existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
        if (existingProduct) {
            let countElement = existingProduct.querySelector(".cart__product-count");
            let currentCount = parseInt(countElement.textContent);
            countElement.textContent = currentCount + quantity;
        } else {
            const task = document.createElement("div");
            task.classList.add("cart__product");
            task.dataset.id = id;

            task.innerHTML = `
                <img class="cart__product-image" src="${src}">
                <div class="cart__product-count">${quantity}</div>
            `;

            cartProducts.appendChild(task);
        }
    })
})