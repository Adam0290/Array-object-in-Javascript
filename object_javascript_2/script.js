// Object Properties - Car List 1 //

let carlist = [];

function addcar() {
let c = { // We will push this later (c = car), it a object with four properties. //
brand: document.getElementById("brand").value, // "brand" ,  "model" , "color" , "price" are all  Object Properties. //
model: document.getElementById("model").value,
color: document.getElementById("color").value,
price: document.getElementById("price").value,
};

carlist.push(c); // A function used to push a element into a Array. //
document.getElementById("brand").value = ""; // This codes resets the text-box  >>>>> .value = ""; //
document.getElementById("model").value = "";
document.getElementById("color").value = "";
document.getElementById("price").value = "";
console.log(carlist);
}