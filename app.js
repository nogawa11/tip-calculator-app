const buttons = document.querySelectorAll('.button-tip');
const tip = document.querySelector('.tip');
let tipPercent = '';
const custom = document.querySelector('.button-custom');
const bill = document.querySelector('.bill');
let billAmount = '';
const number = document.querySelector('.number');
let numberOfPeople = '';
let tipAmount = document.querySelector('.tip-amount');
let total = document.querySelector('.total');
const reset = document.querySelector('.button-reset');
const errorBill = document.querySelector('.error-message-bill');
const errorPeople = document.querySelector('.error-message-people');

bill.addEventListener('input', (event) => {
  billAmount = event.target.value;
  errorBill.classList.remove('display')
  bill.classList.remove('error');
  if (billAmount === '0') {
    bill.classList.add('error');
    errorBill.classList.add('display');
  }
  calculateTip();
})

number.addEventListener('input', (event) => {
  numberOfPeople = event.target.value;
  number.classList.remove('error')
  errorPeople.classList.remove('display');
  if (numberOfPeople === '0') {
    number.classList.add('error')
    errorPeople.classList.add('display');
  }
  calculateTip();
})

custom.addEventListener('input', (event) => {
  buttons.forEach((button) => {
    button.classList.remove('active')
  });
  tipPercent = event.target.value/100;
  calculateTip();
})

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    tipPercent = event.target.value;
    buttons.forEach((button) => {
      button.classList.remove('active')
    });
    event.target.classList.add('active');
    custom.value = "";
    calculateTip();
  })
})

const calculateTip = () => {
  if ((numberOfPeople > 0) && (tipPercent > 0) && (billAmount > 0)) {
    tipAmount.innerText = `$${(billAmount * tipPercent).toFixed(2)}`;
    total.innerText = `$${(billAmount * tipPercent / numberOfPeople).toFixed(2)}`;
    reset.classList.add('active');
  }
}

reset.addEventListener('click', (event) => {
  tipAmount.innerText = '$0.00'
  total.innerText = '$0.00'
  event.target.classList.remove('active');
  buttons.forEach((button) => {
    button.classList.remove('active')
  });
  bill.value = "";
  number.value = "";
  custom.value = "";
})
