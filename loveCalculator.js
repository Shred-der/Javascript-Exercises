// Create a love calculator that has two prompts that asks for the names of the two people
// It should be able to ignore the names and then generate a random number between 1 and 100 and then give the information back to the user in the form of an alert

var maleName = prompt("Enter Male Name");
var femaleName = prompt("Enter Female Name");

var loveScore = Math.random()
loveScore = Math.floor((loveScore * 100) + 1);

if (loveScore >= 100) {
    alert(maleName + " and " + femaleName + " are a perfect match with a 100% lovescore");
}
else if (loveScore < 49) {
    alert(maleName + " and " + femaleName + " are not meant for each other with a " + loveScore + "% lovescore");
}
else if (loveScore > 69) {
    alert(maleName + " and " + femaleName + " are a match with a " + loveScore + "% lovescore");
}


