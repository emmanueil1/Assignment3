"use strict";
// Q6 - Write a program that takes temperature and check it.
// If it is cold then suggest the user to wear warm clothes and so on
// according to the weather
function weatherCareGuide(temperature) {
    if (temperature <= 15) {
        console.log("Please wear heavy dress and stay warm");
    }
    else if (temperature > 15 && temperature <= 28) {
        console.log("Normal weather wear normal dress");
    }
    else {
        console.log("Hot weather, please wear light dress");
    }
}
weatherCareGuide(-11);
