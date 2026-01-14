"use strict";

// URL paraméter  kiolvasása
const urlParams = new URLSearchParams(window.location.search);
const carName = urlParams.get("car");

// A `cars` tömbből kiválasztjuk a megfelelő autót
const car = cars.find(c => c.name === carName);

/*if(car) {
    document.querySelector("#car-name").textContent = car.name;
    document.querySelector("#card-image").src = car.img;
    document.querySelector("#card-image").alt = car.name;
}*/

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const carName = urlParams.get("car");

    const car = cars.find(c => c.name === carName);

    if(car) {
        document.querySelector("#car-name").textContent = car.name;
        const imgElem = document.querySelector("#card-img");
        imgElem.src = car.img;
        imgElem.alt = car.name;
    }
});