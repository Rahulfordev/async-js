fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => {
    console.log(err.message);
  });
