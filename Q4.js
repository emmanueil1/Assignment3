"use strict";
//Q3 - Write a program that converts given number of days in to weeks and days such as
// 17 days = 2 weeks and 3 days.
function weekCalculator(inputDays) {
    var days = inputDays % 7;
    var weeks = inputDays / 7;
    var roundvalue = Math.floor(weeks);
    console.log("The Weeks Are", roundvalue, "and", days, "Days");
}
weekCalculator(100);
