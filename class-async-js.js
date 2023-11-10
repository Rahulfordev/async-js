/**
 * our task
 * take order form the customer with the customer
 * manage Ingredient and process the sustomar name --> 1s
 * process food and customer --> 5s
 * complete order with the processed name --> .5s
 */

// *** main code
const taskOrder = (customer) => {
  return new Promise((res) => {
    res({
      customerName: customer,
      message: "the order has been takn form " + customer,
    });
  });
};

const manageIngredient = (processName) => {
  let prossName = "Hougry " + processName;

  return new Promise((res, rej) => {
    setTimeout(() => {
      //   res({
      //     customerName: prossName,
      //     message: "Managin the ingredient for " + prossName,
      //   });
      rej(new Error("Sorry, do not manage completed order"));
    }, 1000);
  });
};

const processFood = (processName) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Processing the food for " + processName);
    }, 5000);
  });
};

const completeOrder = (processName) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("The order is complete, " + processName + " can goble it up");
    }, 500);
  });
};

// console.log(
//   // completeOrder("Rafsan") // pending
//   taskOrder("Rafsan"),
//   manageIngredient(),
//   processFood(),
//   completeOrder()
// );

// *** call the all function usng then
//call number 1
// taskOrder("Rafsan").then((res1) => {
//   console.log(res1);

//   manageIngredient("Rafsan").then((res2) => {
//     console.log(res2);

//     processFood("Rafsan").then((res3) => {
//       console.log(res3);

//       completeOrder("Rafsan").then((res4) => {
//         console.log(res4);
//       });
//     });
//   });
// });

//// secondary code
// const taskOrder1 = (customer) => {
//   return new Promise((res) => {
//     // res("Helllo", "THel"); // sudu 1 ta return kore --> Helllo
//     //
//     // res({
//     //   name: "hello",
//     //   age: 20,
//     // }); // object dile sob gula return korbe
//     //

//     res({
//       customerName: customer,
//       message: "the order has been takn form " + customer,
//     });
//   });
// };
// console.log(taskOrder1());

// taskOrder1("Rafsan").then((res5) => {
//   console.log(res5);
// });

/// call number 2 automatic ,,, not completed
// taskOrder("rizun")
//   .then((res) => {
//     console.log(res.message);
//     return res.customerName;
//   })
//   .then(manageIngredient)
//   .then((res) => {
//     console.log(res.message);
//     return res.customerName;
//   });

// call number 3
async function fast() {
  try {
    const orderStatus = await taskOrder("Rizun Shovo");
    console.log(orderStatus.message);

    const manageStatur = await manageIngredient(orderStatus.customerName);
    console.log(manageStatur.message);

    //   const processStatus = await processFood(manageStatur.customerName);
    //   console.log(processStatus.customerName);

    //   const completeStatus = await completeOrder(processStatus.customerName);
    //   console.log(completeStatus);
  } catch (error) {
    console.log(error.message);
  }
}
fast();
