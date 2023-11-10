let getValue = new Promise((res, rej) => {
  res("Promise rejected / error");
});

getValue
  .then(function successValue(result) {
    console.log(result);
  })
  .catch(function errorResult(result) {
    console.log(result);
  });
