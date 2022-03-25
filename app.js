const billInput = document.querySelector('.bill');
const tipButtons = document.querySelectorAll('.button-tip');
const customInput = document.querySelector('.button-custom');
const numberInput = document.querySelector('.number');
const errorBill = document.querySelector('.error-message-bill');
const errorPeople = document.querySelector('.error-message-people');
const resetButton = document.querySelector('.button-reset');
let billAmount = '';
let tipPercent = '';
let numberOfPeople = '';
let tipAmount = document.querySelector('.calculation-tip');
let totalPerPerson = document.querySelector('.calculation-total');

billInput.addEventListener('input', (event) => {
  billAmount = event.target.value;
  billInput.classList.remove('error');
  errorBill.classList.remove('display')
  if (billAmount === '0') {
    billInput.classList.add('error');
    errorBill.classList.add('display');
  }
  calculateTip();
})

tipButtons.forEach((tipButton) => {
  tipButton.addEventListener('click', (event) => {
    tipPercent = event.target.value;
    tipButtons.forEach((tipButton) => {
      tipButton.classList.remove('active')
    });
    event.target.classList.add('active');
    customInput.value = "";
    calculateTip();
  })
})

customInput.addEventListener('input', (event) => {
  tipButtons.forEach((button) => {
    button.classList.remove('active')
  });
  tipPercent = event.target.value/100;
  calculateTip();
})

numberInput.addEventListener('input', (event) => {
  numberOfPeople = event.target.value;
  numberInput.classList.remove('error')
  errorPeople.classList.remove('display');
  if (numberOfPeople === '0') {
    numberInput.classList.add('error')
    errorPeople.classList.add('display');
  }
  calculateTip();
})

const calculateTip = () => {
  if ((numberOfPeople > 0) && (tipPercent > 0) && (billAmount > 0)) {
    tipAmount.innerText = `$${(billAmount * tipPercent).toFixed(2)}`;
    totalPerPerson.innerText = `$${(billAmount * tipPercent / numberOfPeople).toFixed(2)}`;
    resetButton.classList.add('active');
  }
}

resetButton.addEventListener('click', (event) => {
  tipAmount.innerText = '$0.00'
  totalPerPerson.innerText = '$0.00'
  event.target.classList.remove('active');
  tipButtons.forEach((tipButton) => {
    tipButton.classList.remove('active')
  });
  billInput.value = "";
  customInput.value = "";
  numberInput.value = "";
})
