const billInput = document.querySelector(".bill-input");
const tipPercent = document.querySelectorAll(".percent-btn");
const nPeople = document.querySelector(".people-input");
const tipAmount = document.querySelector(".amount");
const custom = document.querySelector(".custom");
const total = document.querySelector(".amount-total");

let bill;
let tip;
let numPeople;

const checkActive = () => {
  return document
    .querySelector(".percent-btn.active")
    ?.classList.remove("active");
};

const amountOfTip = () => {
  if (bill && tip && numPeople) {
    const amount = (bill / 100) * tip;
    const perPerson = amount / numPeople;
    const totalPerPerson = bill / numPeople + perPerson;
    tipAmount.textContent = perPerson.toFixed(2);
    total.textContent = totalPerPerson.toFixed(2);
    console.log(amount);
  } else {
    return;
  }
};

billInput.addEventListener("input", () => {
  bill = +billInput.value;
  amountOfTip();
  console.log(bill);
});

custom.addEventListener("input", () => {
  tip = +custom.value;
  checkActive();
  console.log(tip);
});

tipPercent.forEach((percent) => {
  percent.addEventListener("click", (event) => {
    tip = +parseInt(event.currentTarget.textContent, 10);
    checkActive();
    amountOfTip();
    event.currentTarget.classList.toggle("active");
    custom.value = "";
    console.log(tip);
  });
});

nPeople.addEventListener("input", () => {
  numPeople = +nPeople.value;
  amountOfTip();
  console.log(numPeople);
});
