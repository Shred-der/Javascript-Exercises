// You are to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in the format below.
// You have x days, y weeks and z months left.
// For this challenge assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

function lifeInWeeks (currentAge) {
    var daysLeft = (90 - currentAge) * 365;
    var weeksLeft = (90 - currentAge) * 52;
    var monthsLeft = (90 - currentAge) * 12;
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks and " + monthsLeft + " months left." );
}