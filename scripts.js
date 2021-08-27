const billInput = document.querySelector(".bill-input");
const tipPercent = document.querySelectorAll(".percent-btn");
const nPeople = document.querySelector(".people-input");
const tipAmount = document.querySelector(".amount");
const custom = document.querySelector(".custom");

let bill;
let tip;
let numPeople;

billInput.addEventListener("input", () => {
  bill = +billInput.value;
  console.log(bill);
});

tipPercent.forEach((percent) => {
  percent.addEventListener("click", (event) => {
    tip = +parseInt(event.currentTarget.textContent, 10);
    document.querySelector(".percent-btn.active")?.classList.remove("active");
    event.currentTarget.classList.toggle("active");
    console.log(tip);
  });
});

nPeople.addEventListener("input", () => {
  numPeople = +nPeople.value;
  console.log(numPeople);
});
