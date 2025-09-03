// Спливання подій
// event.target - цільовий(вихідний) елемент
// event.currentTarget - поточний елемент, на слуханні якого спіймали (тобто на тому на якому стоїть слухач)

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

parent.addEventListener("click", parentClick);
child.addEventListener("click", childClick);
innerChild.addEventListener("click", innerChildClick);
innerChild.addEventListener("click", foo);

function parentClick(event) {
    console.log("parent targ", event.target);
    console.log("parent currtarg", event.currentTarget);
    
}
function childClick(event) {
    console.log("child targ", event.target);
    console.log("child currtarg", event.currentTarget);
    
}
function innerChildClick(event) {
    // event.stopPropagation(); //Припиняє вспливання події
    event.stopImmediatePropagation(); //Запиняє виконання інший функцій на інших слухачах на тому самому елементі
   
    console.log("innerChild targ", event.target);
    console.log("innerChild currtarg", event.currentTarget);
    
}

function foo() {
   
    console.log("foo");
    
} 