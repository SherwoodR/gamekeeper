// Обработка события нажатия на кнопку "Связаться с нами"
const button = document.querySelector("button");
button.addEventListener("click", function() {
  alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
});

// Обработка события наведения на название сайта
const title = document.querySelector("h1");
title.addEventListener("mouseover", function() {
  this.style.color = "#ff0";
});

title.addEventListener("mouseout", function() {
  this.style.color = "#fff";
});