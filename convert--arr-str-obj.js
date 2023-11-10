const arr = ["tanjim", "tamim", "mustafizur", "musfikur"];
const str = JSON.stringify(arr); // Convert array to string
const par = JSON.parse(str); // Convert string to object
console.log(typeof par);
