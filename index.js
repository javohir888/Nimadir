let inp1 = document.querySelector(".input1");
let inp2 = document.querySelector(".input2");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");

inp1.addEventListener('click', () => {
    p1.classList.toggle("toggle");
});

inp2.addEventListener('click', () => {
    p2.classList.toggle("toggle");
});