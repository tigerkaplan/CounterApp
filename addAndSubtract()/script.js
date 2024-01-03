function addAndSubtract(operation) {
  let output = document.getElementById("output");
  let currentValue = parseInt(output.innerText);

  if (operation === "add") {
    currentValue++;
  } else if (operation === "subtract") {
    currentValue--;
  }

  // Apply conditions or limits if needed
  //For example, limit the count between 0 and 20

  if (currentValue < 0) {
    currentValue = 0;
  } else if (currentValue > 20) {
    currentValue = 20;
  }

  output.innerText = currentValue;
}

document.getElementById("add").addEventListener("click", function() {
  addAndSubtract("add");
});

document.getElementById("subtract").addEventListener("click", function() {
  addAndSubtract("subtract");
});
