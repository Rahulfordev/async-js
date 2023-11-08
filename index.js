// *** main code

// const takeOrder = (customer, processOrder) => {
//   console.log(`Take order for ${customer}`);
//   processOrder(customer);
// };

// const processOrder = (customer, completeOrder) => {
//   setTimeout(() => {
//     console.log(`Process order for ${customer}`);
//     completeOrder(customer);
//   }, 3000);
// };

// const completeOrder = (customer, goHome) => {
//   setTimeout(() => {
//     console.log(`Complete order for ${customer}`);
//     goHome(customer);
//   }, 2000);
// };

// const goHome = (customer) => {
//   console.log(`${customer} went to Home`);
// };

// takeOrder("Rizun", (customer) => {
//   processOrder(customer, () => {
//     completeOrder(customer, () => {
//       goHome(customer);
//     });
//   });
// });

// *** try to another
const val1 = (value, callback) => {
  console.log(`it is primary ${value}`);
  callback(value);
};

const val2 = (value, callback) => {
  console.log(`this is secondary ${value}`);
  callback(value);
};

function val(value) {
  console.log(`this is thard ${value}`);
}

// val1("Sabur", val);

// *** pure function for call
val1("Sabur", (value) => {
  val2(value, () => {
    val(value);
  });
});
