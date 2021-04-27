const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const swap = document.getElementById("swap");
const rate = document.getElementById("rate");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

function calculate() {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((response) => response.json())
    .then((data) => {
      const convRate = data.rates[currency_two];
      rate.innerText = `1 ${currency_one} = ${convRate} ${currency_two}`;
      amountTwo.innerText = Number(convRate * amountOne.value).toFixed(2);
    })
    .catch((err) => console.log(err));
}

function onSwap() {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
}

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swap.addEventListener("click", onSwap);
currencyTwo.addEventListener("change", calculate);

calculate();
