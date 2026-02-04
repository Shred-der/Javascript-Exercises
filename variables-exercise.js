// Javascript Variables Exercise

//Given the code below, write some code to switch the values of a and b without reassigning their values using numbers
// var a = "3";
// var b = "8"

// when the code is run, it should output
// a is 8
// b is 3

// The solution is to think of it in terms of switching buckets containig sand and water without mixing them
// How to do that? add another bucket!

function test() {
    var a = "3";
    var b = "8";

    var c = a;
    var a = b;
    var b = c;

    console.log("a is "+ a);
    console.log("b is" + b);
}
test();