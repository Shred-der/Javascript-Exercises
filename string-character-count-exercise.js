// Write a Javascript code to create a prompt where the user can enter a long string such as a paragraph of text
// You'll tell them how many characters they have written and how many characters they have left
// The output should be: 
// You have written "number_of_charcters", you have "number_of_characters" left

var paragraph = prompt("what's on your mind?");
var characterLimit = 140;
var characterCount = paragraph.length;
var characterLeft = characterLimit - paragraph.length;
var output = "You have written " + characterCount +  " characters, you have " + characterLeft + " left"

alert(output);
console.log(output);