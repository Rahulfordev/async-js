let number = 20;

// try {
//   if (number > 50) {
//     console.log("sucess");
//   } else {
//     throw new TypeError("This is my declared error");
//   }
//   console.log("try ture");
// } catch (error) {
//   console.log("error message: " + error);
// }

// *** ami caile
try {
  throw new Error("This is throw error");
} catch (erro) {
  console.log("an error catch");
  if (number > 10) {
    console.log("error message: " + erro);
    console.log("error resolved");
  } else {
    throw new Error("the number is low");
  }
}
