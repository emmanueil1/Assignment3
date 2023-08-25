"use strict";
//Q4 - Write a program that calculates the discount for a product based on its price.
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function discount(price) {
    var discount1 = 0.1;
    var discount2 = 0.05;
    if (price > 100) {
        console.log("On $100 Discount 10% =", price - (price * discount1));
    }
    else {
        console.log("Below $100 Discount Is 5% =", price - (price * discount2));
    }
}
discount(110);
