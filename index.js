let number = "";
let secondNumber = "";
let operator = "";

const onNumberPressed = num => {
  number += num;
  document.querySelector("#result").innerHTML = number;
};

const ops = type => {
  secondNumber = number;
  number = "";
  ops = type;
};

const numberValue = () => {
  let viewValue = document.getElementById("viewer");
  document.querySelector("").innerHTML = "";

  let total = 0;

  const firstNumber = parseInt(number);
  const secNumber = parseInt(secondNumber);

  switch (operator) {
    case "multiply":
      total = firstNumber * secNumber;
      break;
    case "divide":
      total = firstNumber / secNumber;
      break;
    case "add":
      total = firstNumber + secNumber;
      break;
    case "substract":
      total = firstNumber - secNumber;
      break;
    default:
      break;
  }

  result.innerHTML = total;
};
