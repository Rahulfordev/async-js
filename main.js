// async function f() {
//   console.log("first async function");
//   return Promise.resolve(1);
// }
// f()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log("catch error " + error);
//   });

//

// var a = 5;
// function log() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }
// log();
// console.log(a);

// console.log(a);
// const a = 5;

let arr2 = [];

for (let i = 0; i <= 100000; i += 2) {
  if (i == 0) {
    continue;
  }
  arr2.push(i);
}

console.log(arr2);
