let number = 15;

function add() {
  return (number += 6);
}

function subtract() {
  return (number -= 2);
}

function multiply() {
  return (number *= 8);
}

function divide() {
  return (number /= 4);
}

function increment() {
  return number++;
}

function decrement() {
  return number--;
}

function add(a, b) {
  return a + b;
}

add(50, 17);

function subtract(x, y) {
  return x - y;
}

subtract(70, 17);

function multiply(x, y) {
  return x * y;
}

multiply(4, 4);

function divide(x, y) {
  return x / y;
}

divide(80, 4);

function increment(number) {
  return ++number;
}

increment(10);

function decrement(number) {
  return --number;
}

decrement(7);

function makeInt(string) {
  return parseInt(string, 10);
}

function preserveDecimal(string) {
  return parseFloat(string);
}
