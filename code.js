document.addEventListener("DOMContentLoaded", myFunction)

function myFunction() {
  console.log('hi');

  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const plus_button = document.getElementsByTagName("button")[0];
  const minus_button = document.getElementsByTagName("button")[1];
  const multiply_button = document.getElementsByTagName("button")[2];
  const divide_button = document.getElementsByTagName("button")[3];
  const result = document.getElementById("res");

  plus_button.addEventListener("click", mySum);
  minus_button.addEventListener("click", mySubtract);
  multiply_button.addEventListener("click", myMultiply);
  divide_button.addEventListener("click", myDivide);

  function mySum() {
    console.log('call mySum');
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const sum = value1 + value2;
    result.textContent = sum;
  }

  function mySubtract() {
    console.log('call mySubtract');
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const difference = value1 - value2;
    result.textContent = difference;
  }

  function myMultiply() {
    console.log('call myMultiply');
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const product = value1 * value2;
    result.textContent = product;
  }

  function myDivide() {
    console.log('call myDivide');
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const quotient = value1 / value2;
    result.textContent = quotient;
  }
}