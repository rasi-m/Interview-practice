let name1 = "Rasi";   // global
var age = 22;        // global
const city = "Chennai"; // global

function show() {

    document.getElementById("op").innerHTML += `Name: ${name1} <br><br>Age:${age}`
//   console.log(name1); 
//   console.log(age);  
}
//   console.log(city);
document.getElementById("op").innerHTML += `City: ${city}<br><br>`
show();
