const buttons = document.querySelectorAll('.button-tip');
let tipPercent = '';
const custom = document.querySelector('.button-custom');
const bill = document.querySelector('.bill');
let billAmount = '';
const number = document.querySelector('.number');
let numberOfPeople = '';
let tipAmount = document.querySelector('.tip-amount');
let total = document.querySelector('.total');
const reset = document.querySelector('.button-reset');

bill.addEventListener('input', (event) => {
  billAmount = event.target.value;
  console.log(billAmount);
})

number.addEventListener('input', (event) => {
  numberOfPeople = event.target.value;
  console.log(numberOfPeople);
  calculateTip();
})

custom.addEventListener('input', (event) => {
  tipPercent = event.target.value/100;
  console.log(tipPercent);
})

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    tipPercent = event.target.value;
    buttons.forEach((button) => {
      button.classList.remove('active')
    });
    event.target.classList.add('active');
    console.log(tipPercent);
  })
})

const calculateTip = () => {
  tipAmount.innerText = `$${(billAmount * tipPercent).toFixed(2)}`;
  total.innerText = `$${(billAmount * tipPercent / numberOfPeople).toFixed(2)}`;
  reset.classList.remove('disabled');
}
