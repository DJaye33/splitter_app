const billInput = document.querySelector(".bill-input");
const tipPercent = document.querySelectorAll(".percent-btn");
const nPeople = document.querySelector(".people-input");
const tipAmount = document.querySelector(".amount");
const custom = document.querySelector(".custom");
const total = document.querySelector(".amount-total");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");
const number = document.querySelector(".number");
const inputs = document.querySelector(".inputs");

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

const checkValues = () => {
  if (!amountOfTip()) {
    tipAmount.textContent = "0.00";
    total.textContent = "0.00";
  }
};

billInput.addEventListener("input", () => {
  bill = +billInput.value;
  checkValues();
  amountOfTip();
  if (billInput.value === "0") {
    inputs.style.border = "2px solid var(--error)";
  } else {
    inputs.style.border = "";
  }
  console.log(bill);
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
  console.log(tip);
});

tipPercent.forEach((percent) => {
  percent.addEventListener("click", (event) => {
    tip = +parseInt(event.currentTarget.textContent, 10);
    checkValues();
    checkActive();
    amountOfTip();
    event.currentTarget.classList.toggle("active");
    custom.value = "";
    console.log(tip);
  });
});

nPeople.addEventListener("input", () => {
  numPeople = +nPeople.value;
  checkValues();
  amountOfTip();
  // check if value is 0
  if (nPeople.value === "0") {
    error.classList.remove("hidden");
    number.style.border = "2px solid var(--error)";
  } else {
    error.classList.add("hidden");
    number.style.border = "";
  }

  console.log(numPeople);
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
