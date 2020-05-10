// Generate Function

/* function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
} */

function getRandomLower () {
  const lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const lower = lowers[Math.floor(Math.random() * lowers.length)];
  
  return lower;
}
console.log(getRandomLower());

function getRandomUpper () {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const upper = uppers[Math.floor(Math.random() * uppers.length)];
  
  return upper;
}
console.log(getRandomUpper());

function getRandomNumber () {
  const numbers = '0123456789'.split('');
  const number = numbers[Math.floor(Math.random() * numbers.length)];
  
  return number;
}
console.log(getRandomNumber());

function getRandomSymbol () {
  const symbols = ' !@#$%^&*(){}[]=<>/,.?'.split('');;
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  
  return symbol;
}
console.log(getRandomSymbol());