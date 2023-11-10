// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
//   setTimeout(showTime, 60000);
// }

// showTime();

// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// *** await promise

let promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise reolved");
  }, 3000);
});

async function asyncFunc() {
  let result = await promise;
  console.log(result);
  console.log("I'm awaiting for you!!");
}

asyncFunc();
