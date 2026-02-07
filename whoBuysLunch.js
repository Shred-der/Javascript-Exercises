// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
// Important: The output should be returned from the function and you do not need alert, prompt or console.log
// The output should match the example output exactly, including capitalisation and punctuation
// Example Output: 
// ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// Michael is going to buy lunch today!

var names = ["Mighty", "Femi", "Foley", "Stephen", "Francis"];

function whosPaying(names){
    var randomNum = Math.floor(Math.random() * names.length);
    return names[randomNum] + " is going to buy lunch today!"
}