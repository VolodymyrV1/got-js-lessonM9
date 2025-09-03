/**
*Додавання прослуховувача подій на кожний елемент
*
* Отримай колір квадрата по якому здійснено клік
*/


// const container = document.querySelector(".container");



// [...container.children].map(box => {
//     box.addEventListener("click", handlerClick)
    
// });


// function handlerClick(event) {
//     const color = event.target.dataset.color;
//     console.log(color);
    
    
    
    
// }





/**
* Делегування подій
* 
* Отримай колір квадрата по якому було здійснено клік
*/

const container = document.querySelector(".container");

container.addEventListener("click", handlerClick);

function handlerClick(event) {
    if (!event.target.classList.contains("box")) {
        return;
        
    }

    const color = event.target.dataset.color;
    console.log(color);
}