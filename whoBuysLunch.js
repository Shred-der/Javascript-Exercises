var names = ["Mighty", "Femi", "Foley", "Francis", "Stephen"];

function whosPaying(names){
     var randomNum = Math.floor(Math.random() * names.length);
 return names[randomNum] + " is going to buy lunch today!"
}