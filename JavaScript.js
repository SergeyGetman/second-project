//создаем константу q которая выбирает первый selector из HTML, который
const q = (selector) => document.querySelector(selector);
//создаем константу Q которая будет функцией, выбирать все элементы CSS из HTML
const Q = (s) => document.querySelectorAll(s);

//создаем переменную buttonTakeAll и берем ее id
let buttonTakeAll = q("button#takeall");
//создаем событие методом addEventListener click
buttonTakeAll.addEventListener("click", function () {
  //выбираем input, и методом forEach говорим, установить отметку
  Q("input[type='checkbox']").forEach((elem) => (elem.checked = true));
});

//создаем переменную newButtonTwo, обращаясь к ней по id
let newButtonTwo = q("button#two");
//создаем событие методом addEventListener click
newButtonTwo.addEventListener("click", function () {
  //выбираем input, и методом forEach говорим, что отметка != отметке
  Q("input[type='checkbox']").forEach((elem) => (elem.checked = !elem.checked));
});

let newButtonThree = q("button#three");
//создаем событие методом addEventListener click
newButtonThree.addEventListener("click", function () {
  //выбираем input, и методом forEach говорим, установить отметку
  Q("input[type='checkbox']").forEach((elem) => (elem.checked = false));
});
