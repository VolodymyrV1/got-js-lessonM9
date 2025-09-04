const container = document.querySelector(".js-list");
const clearBtn = document.querySelector(".js-clear");
const totalPrice = document.querySelector(".js-total-price");

const PRODUCT_LS_KEY = 'basket';

const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
let totalCoast;

if(products.length) {
    clearBtn.hidden = false;
    totalCoast = products.reduce((acc, { price, qty }) => acc + price * qty, 0);
}


totalPrice.textContent = totalCoast ? `Total cost ${totalCoast} uah` : "Your basket is empty";
container.insertAdjacentHTML("beforeend", createMarkUp(products));
clearBtn.addEventListener("click", handlerClearBasket);


function handlerClearBasket() {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "./03-shop.html";
}


function createMarkUp(arr) {
    return arr.map(({ img, name, price, qty}) => `
        <li class="cart-item">
            <img src="${img}" name="${name}" class="product-img"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${price * qty}</p>
        </li>
    `).join("");
}