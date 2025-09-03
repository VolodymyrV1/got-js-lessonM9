const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", handleSubmit)
textarea.addEventListener("input", handlerInput);

populateTextAres();

/**
 * - Скасовуємо стандартну поведінку
 * - ВИдаляємо повідомлення зі сховища
 * - Очищаємо форму
 */

function handleSubmit(event) {
    event.preventDefault();

    console.log("Відправлення форми");
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}



/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function handlerInput(event){
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);    

}


/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо в DOM
 */

function populateTextAres() {
    const message = localStorage.getItem(STORAGE_KEY);

    if(message) {
        textarea.value = message;
    }
}