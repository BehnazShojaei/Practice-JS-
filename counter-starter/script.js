const add = (step) => {
  // We gave the number element an id of number so we can use that to get the element
  let numberElement = document.getElementById("number");
  // We can use the innerText property to get the text inside the element
  let number = numberElement.innerText;
  number = parseInt(number) + step;
  numberElement.innerText = number;

};


const subtract = (step) => {
  let numberElement = document.getElementById("number");
  let number = parseInt(numberElement.innerText);
  numberElement.innerText = number - step;
};

const reset = () => {
  let numberElement = document.getElementById("number");
  numberElement.innerText = 0;
};

const customInput = (operation) => {
  let textElement = document.getElementById("text-box");
  let step = parseInt(textElement.value);// converts a string into an integer
  //check if the input is valid if it is then check the operation and do the math  

  if (!isNaN(step)) {
    if (operation === "add") {
      add(step);
    } else if (operation === "subtract") {
      subtract(step);
    }
  } else {
    alert("Please enter a valid number");
  }
  textElement.value = ""; // Clear the text box after operation

};



