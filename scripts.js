const billInput = document.querySelector(".bill-input");
const tipPercent = document.querySelectorAll(".percent-btn");
const nPeople = document.querySelector(".people-input");
const tipAmount = document.querySelector(".amount");
const custom = document.querySelector(".custom");
const total = document.querySelector(".amount-total");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");
const numError = document.querySelector(".num-error");
const number = document.querySelector(".number");
const inputs = document.querySelector(".inputs");
const inputsBill = document.querySelector(".inputs-bill");

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
  } else {
    return;
  }
};

const checkValues = () => {
  if (!amountOfTip()) {
    tipAmount.textContent = "0.00";
    total.textContent = "0.00";
  }
};

const showHideError = (firstEl, secondEl, errorClass) => {
  if (firstEl.value === "0") {
    errorClass.classList.remove("hidden");
    secondEl.style.border = "2px solid var(--error)";
  } else {
    errorClass.classList.add("hidden");
    secondEl.style.border = "";
  }
};

billInput.addEventListener("input", () => {
  bill = +billInput.value;
  checkValues();
  amountOfTip();
  showHideError(billInput, inputsBill, error);
});

custom.addEventListener("input", () => {
  tip = +custom.value;
  checkValues();
  checkActive();
  amountOfTip();
  if (custom.value === "0") {
    custom.style.border = "2px solid var(--error)";
  } else {
    custom.style.border = "";
  }
});

tipPercent.forEach((percent) => {
  percent.addEventListener("click", (event) => {
    tip = +parseInt(event.currentTarget.textContent, 10);
    checkValues();
    checkActive();
    amountOfTip();
    event.currentTarget.classList.toggle("active");
    custom.value = "";
  });
});

nPeople.addEventListener("input", () => {
  numPeople = +nPeople.value;
  checkValues();
  amountOfTip();
  showHideError(nPeople, number, numError);
});

reset.addEventListener("click", () => {
  billInput.value = "";
  nPeople.value = "";
  custom.value = "";
  bill = undefined;
  tip = undefined;
  numPeople = undefined;
  checkActive();
  tipAmount.textContent = "0.00";
  total.textContent = "0.00";
});
