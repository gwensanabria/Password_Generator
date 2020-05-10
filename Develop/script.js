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