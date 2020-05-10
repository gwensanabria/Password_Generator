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

// Checked Variables
generateEl.addEventListener('click', (event) => {
  event.preventDefault;
  const length = parseInt(lengthEl.value);  // parseInt - string to number
  const hasLower = lowercaseEl.checked;   // value and checked validate selected items, if true or false checked
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

// console.log(hasLower, hasUpper, hasNumber, hasSymbol);
// console.log(length)

passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol);

});

// Generate Password
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''; // initialize key
  const variables = lower + upper + number + symbol; //counts number of checked values
  // console.log('variables', variables);

  const masterArr = [{lower}, {upper}, {number}, {symbol}].filter;  // curly bracket makes it so it tells you which variable is true. ex) lower: true
  // console.log('masterArr', masterArr);

  (item => Object.values(item)[0]) // removes unchecked values from array

  if(variables === 0) {  // if no variables checked, returns nothing
    return '';
  }

  
  for(let i = 0; i < length; i++) {
    masterArr.forEach(master => {
      const passName = Object.keys(master)[0];
      // console.log('passName:', passName);

      generatedPassword += masterFunc[passName]();
    });
  }
console.log(generatedPassword);

  return generatedPassword;
}



// Generate Function

/* function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
} */

function getRandomLower () {
  const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return lower[Math.floor(Math.random() * lower.length)];
}
// console.log(getRandomLower());

function getRandomUpper () {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return upper[Math.floor(Math.random() * upper.length)];
}
// console.log(getRandomUpper());

function getRandomNumber () {
  const numbers = '0123456789'.split('');
  return numbers[Math.floor(Math.random() * numbers.length)];
}
// console.log(getRandomNumber());

function getRandomSymbol () {
  const symbols = ' !@#$%^&*(){}[]=<>/,.?'.split('');;
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomSymbol());

// console.log(); CANNOT COME AFTER RETURN IF IN CURLY BRACKET