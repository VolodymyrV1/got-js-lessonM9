/*
* Деструктуризація обʼєкта в циклі
*/




// const users = [{name: "Kate"}, {name: "Alice"}, {name: "Petya"}];

// Без деструктуризації
// const names = [];

// for(const item of users) {
//     names.push(item.name);    
// };

// console.log(names);



// З деструктуризацією
// const names = [];

// for(const { name } of users) {
//     names.push(name);    
// };

// console.log(names);

//===

// for(const item of users) {
//     const { name } = item;
//     names.push(name);
// }

// console.log(names);


//===

// const names = users.map(({ name: userName }) => {
//     return userName;
    
// });


// console.log(names);