const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // data.forEach((element) => {
    //     console.log(element.title);
    //   });

    const lastData = data.slice(0, 15);

    console.log(lastData);
  } catch (error) {
    console.error("Error", error);
  }
}

fetchData();
