// Write code that creates a tweet prompt and cuts the characters down to 140 characters

var tweet = prompt("Type in your tweet");
var tweetCount = tweet.length;
var output = tweet.slice(0,140);
alert(output);
console.log("You typed " + tweetCount + " characters");