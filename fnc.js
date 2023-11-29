// normal function

function displayHello() {
  console.log("hello world");
}

// arrow function
const displayHelloAgain = () => {
  console.log("Hello again");
};

//  console.log(displayHelloAgain);

// displayHello();
// displayHelloAgain();

// iife = immediate invoked function execution

// (function () {
//   console.log("hey");
// })();

// function functionVitraFunction(functionKoName) {
//   functionKoName();
// }

// functionVitraFunction(displayHello);

function returningFnc() {
  const a = 5;
  return function () {
    console.log(a);
  };
}

const arkoFnc = returningFnc();
arkoFnc();
