// Write code that creates a prompt that asks the guests "what is your name?" that then checks the input against all of the names inside our guest list and if it exists
// send them an alert saying welcome and if it doesn't you tell them sorry next time

    var guestName = prompt("what's your name?");
    var guestList = ["Femi", "Precious", "Tunmininu", "Temi", "Marvelous", "Evans", "Francis"];
    if (guestList.includes(guestName)) {
        alert("Welcome to the party!!!");
    } else {
        alert("Sorry, maybe next time.");
    }