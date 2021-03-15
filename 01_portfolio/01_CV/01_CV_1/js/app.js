// import "../css/style.css";
import "../scss/main.scss";

// const h1 = document.createElement("h1");
// h1.innerText = "Hello World!";
// document.querySelector("#app").append(h1);


const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

const citiesLength = cities.map(function(city){
    return city.length;
});

console.log(cities);
console.log(citiesLength)