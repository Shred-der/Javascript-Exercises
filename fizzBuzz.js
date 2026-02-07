// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz"

var output = [];
var count = 1
function fizzBuzz() {
    if (count % 3 === 0) {
        if (count % 5 === 0) {
            output.push("fizzbuzz")
        } else {
            output.push("fizz");
        }
    } else {
        if (count % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(count);
        }
    }
    count++
    console.log(output);
}


