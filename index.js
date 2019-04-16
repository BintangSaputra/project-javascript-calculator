let result = result => {
  if (result.charAt(0) === "#") {
    return document.querySelector(result);
  }

  return document.querySelector(result);
};

let viewer = result("#viewer"),
  equals = result("#equals"),
  num = result(".num"),
  ops = result(".ops"),
  theNum = "",
  oldNum = "",
  resultNum,
  operator;
