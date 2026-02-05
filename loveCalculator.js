// Create a love calculator that has two prompts that asks for the names of the two people
// It should be able to ignore the names and then generate a random number between 1 and 100 and then give the information back to the user in the form of an alert

var maleName = prompt("Enter Male Name");
var femaleName = prompt("Enter Female Name");

var n = Math.random()
n = Math.floor(n * 100);
alert("The lovescore between " + maleName + " and " + femaleName + " is " + n);
