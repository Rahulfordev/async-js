// *** try catch

// **Example-1
let a = 100;

try {
  console.log(a / c); // ei error catch e show korbe
} catch (error) {
  console.log("Hello catch");
  console.log(error.message); //c is not defined
} finally {
  console.log("I have a power"); // asbei
}

// **Example-2
try {
  setTimeout(function () {
    //
  }, 3000);
} catch (error) {
  console.log("won't work");
}
//The above try...catch won't work because the engine has already left the try..catch construct and the function is executed later.
setTimeout(function () {
  try {
    // error in the code
  } catch {
    console.log("error is caught");
  }
}, 3000);


