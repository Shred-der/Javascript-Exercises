// Create a prompt that asks for a name and then formats the name to give the format below irrespective of the alphabetical casing that was inputed using only what you've learned so far
// "Hello Angela"

var name = prompt("What's your name?");
var formattedName = (name.slice(0,1)).toUpperCase() + (name.slice(1,name.length)).toLowerCase();
alert("Hello " + formattedName);
console.log("Hello " + formattedName);

