//Q3 - Write a program that converts given number of days in to weeks and days such as
// 17 days = 2 weeks and 3 days.
function weekCalculator(inputDays:number)
{
    var days:number=inputDays%7
    var weeks:number=inputDays/7
    var roundvalue:number=Math.floor (weeks)
    console.log("The Weeks Are",roundvalue,"and",days,"Days")
}
weekCalculator(100)