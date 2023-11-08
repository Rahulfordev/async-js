// *** try catch

let a = 100;

try {
  console.log(a / c); // ei error catch e show korbe
} catch (error) {
  console.log("Hello catch");
  console.log(error.message); //c is not defined
} finally {
  console.log("I have a power"); // asbei
}
