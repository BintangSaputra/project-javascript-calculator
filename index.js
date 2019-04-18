let number = "";
let secondNumber = "";
let operator = "";

const num = num => {
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
};
