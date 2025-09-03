/**
 * LocalStorage
 */



const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];



/**
 *  Збереження
 *  Чому треба використовувати метод JSON.stringify
 */


// localStorage.setItem(LS_KEY, JSON.stringify(names));






/**
 * Читання
 * Чому треба викорисовувати метод JSON.parse
 */

// const values = localStorage.getItem(LS_KEY);

// console.log(JSON.parse(values));


/**
 * Видалення
 */

// localStorage.removeItem(LS_KEY);

// localStorage.clear(); //Повністю очищає локальне схов



/**
 * LocalStorage не може зберігати функції
 */


//Приклад 1
// function add (a, b) {
//     return a + b;
// }

// localStorage.setItem("my_foo", add);

// const foo = localStorage.getItem("my_foo");

// console.log(foo);


//ПП
// Приклад 2
// const calc = {
//     a: 1,
//     b: 2,
//     add() {
//         return this.a + this.b;
//     }
// }

// localStorage.setItem("my_foo", JSON.stringify(calc));

// const obj = localStorage.getItem("my_foo");

// console.log(JSON.parse(obj));

