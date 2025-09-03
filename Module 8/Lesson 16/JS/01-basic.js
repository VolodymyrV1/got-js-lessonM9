/*
* Деструктирізація об'єкта
*/

// const user = {
//     userName: "Alice",
//     age: 30,
//     city: "Kyiv"
// };


// const city = "Poltava";

// //                        user.city
// const { userName, age, city: userCity = "Dnipro" } = user;

// console.log(userName); //user.userName
// console.log(age); // user.age
// console.log(userCity); // user.city (зміна назви ключаб в об'єкті все залишається без змін)

//===


// Можна деструктруктирузовувати меншe змінних тобто взаємо ім'я тої яка необхідна
// const { userName, age } = user;

// console.log(userName);

//===

// const { userName, ...rest } = user;

// console.log(userName);
// console.log(rest);


//========================================================//========================================================

/*
* Глибока деструктирізація об'єкта
*/

// const user = {
//     userName: "Alice",
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// };

// const { skills: { html, css, js } } = user;

// console.log(css);



//=== Деструктуризація в масиві

// const arr = ["hello", "world", "lalala", "tototo"];



// const [first, second, , third] = arr;


// console.log(second);
// console.log(third);


// const [first, ...rest] = arr;

// console.log(first);
// console.log(rest);


