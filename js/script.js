"use strict";

const scoreButton = document.querySelector("#score-button");
const score = document.querySelector("#score");
const doubleCard = document.querySelector("#double-card");
const hoverZone = document.querySelector("#hover-zone");
const status = document.querySelector("#status");
const scorebutton2 = document.querySelector("#score-button-");
let points = 0;
scoreButton.addEventListener("click", () => {
    points += 1;
    score.textContent = points;
    status.textContent = "добавлен балл";
});
scorebutton2.addEventListener("click", () => {
    points -= 1;
    score.textContent = points;
    status.textContent = "балл отнят";
});
// Задание 1. Подключите click к scoreButton.
// Внутри обработчика увеличьте points, затем обновите score.textContent и status.
doubleCard.addEventListener("dblclick", () => {
    doubleCard.classList.toggle("is-selected")
    status.textContent = "цвет изменен"
})
// Задание 2. Подключите dblclick к doubleCard.
// Переключите класс is-selected и измените текст status.
hoverZone.addEventListener("mouseenter", () => {
    hoverZone.classList.add("is-hovered")
    status.textContent = "мышь"
})
// Задание 3. Подключите mouseenter к hoverZone.
// Добавьте класс is-hovered и покажите сообщение.
hoverZone.addEventListener("mouseleave", () => {
    hoverZone.classList.remove("is-hovered")
    status.textContent = "без мыши"
})
// Задание 4. Подключите mouseleave к hoverZone.
// Уберите класс is-hovered и верните исходный текст статуса.
