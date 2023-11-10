// Define the URL of the JSONPlaceholder API endpoint
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Call a function to display the data in the HTML
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to display data in the HTML
function displayData(posts) {
  const postList = document.getElementById("postList");

  // Loop through the posts and create list items
  posts.forEach((post) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
    postList.appendChild(listItem);
  });
}

// Call the fetchData function when the page loads
fetchData();
