let add = document.querySelector ("#add");
let subtract = document.querySelector ("#subtract");

console.log (add, subtract);

// adding function

add.addEventListener("click", function () {
  // Every time the add button is pressed, this code will execute.
  let output = document.querySelector ("#output");
  // changed string into a number using the Number() method.
  let result = Number(output.innerText) +1 ;

  //  Conditionals are used to solve questions like, "What if we want our counter app to stop counting at 10?" or "What if we want to skip a number?" 

  // if (condition) {
  //   /* code to run if condition is true */
  // } else {
  //   /* run some other code instead */
  // }
  

  if (result > 20) {
    result = 0;
  }
  output.innerText = result;
});

// subtract function

subtract.addEventListener("click", function () {
  let output = document.querySelector ("#output");
  let result = Number(output.innerText) -1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});