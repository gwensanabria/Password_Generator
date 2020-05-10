// Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');



const masterFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  event.preventDefault;
  const length = lengthEl.Value;

console.log(length);

})


// Generate Function

/* function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
} */

function getRandomLower () {
  const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return lower[Math.floor(Math.random() * lower.length)];
}
console.log(getRandomLower());

function getRandomUpper () {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return upper[Math.floor(Math.random() * upper.length)];
}
console.log(getRandomUpper());

function getRandomNumber () {
  const numbers = '0123456789'.split('');
  return numbers[Math.floor(Math.random() * numbers.length)];
}
console.log(getRandomNumber());

function getRandomSymbol () {
  const symbols = ' !@#$%^&*(){}[]=<>/,.?'.split('');;
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());