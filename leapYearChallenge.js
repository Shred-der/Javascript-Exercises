// Write a function that works out if a given year is a leap year. Use the formula below to workout a leap year
// Every year that is evenly divisible by 4 is a leap year, except every year that is evenly divisible by 100 unless the year is also divisible by 400

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0){
            if (year % 400 === 0) {
                return "is a leap year"
            } else {return "is not a leap year"}
        } else {return " is a leap year"}
    } else {
        return "not a leap year"
    }
}