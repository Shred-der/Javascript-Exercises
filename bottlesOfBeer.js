// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

var numOfBottles = 99;

function bottlesOnWall(){
    while (numOfBottles >= 2) {
        console.log(numOfBottles + " bottles of beer on the wall, " + numOfBottles + " bottles of beer. Take one down and pass it around, " 
        + (numOfBottles - 1) + " bottles of beer on the wall.");
        numOfBottles--;
    }
    if (numOfBottles === 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer, Take it down and pass it around, 0 bottles of beer on the wall.")
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}