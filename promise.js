// let hasTrainsite = false;

// let trainTricket = new Promise((resolve, reject) => {
//   if (hasTrainsite) {
//     let userDetails = {
//       name: "Khalid",
//       age: 25,
//       sitNum: 45,
//     };
//     resolve(userDetails);
//   } else {
//     reject(new Error("Site not unable"));
//   }
// });

// trainTricket
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej.message));

// *** example

let count = true;

let getCont = new Promise((res, rej) => {
  if (count) {
    res("this is the countable value");
  } else {
    rej("count is not able value");
  }
});

console.log(getCont);
