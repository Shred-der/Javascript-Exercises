//1. Write the code that moves Karel all the way to the top right corner in a 5 by 5 world

function main() {
    move();
    moveAndTurnLeft();
    moveAndTurnRight();
    moveAndTurnLeft();
    moveAndTurnRight();
    moveAndTurnLeft();
    moveAndTurnRight();
    moveAndTurnLeft();
}

function moveAndTurnLeft() {
    turnLeft();
    move();
}

function moveAndTurnRight() {
    turnRight();
    move();
}


//2. Write code that'll make Karel drop beeper across the diagonal

function beeperOnDiagonals(){
    putBeeper();
    move();
    moveLeftAndBeeper();
    moveRightAndBeeper();
    moveLeftAndBeeper();
    moveRightAndBeeper();
    moveLeftAndBeeper();
    moveRightAndBeeper();
    moveLeftAndBeeper();
}

function moveLeftAndBeeper() {
    turnLeft();
    move();
    putBeeper();
}

function moveRightAndBeeper() {
    turnRight();
    move();
}


//3. Get Karel to create a chessboard pattern

function karelChessPattern(){
    putBeeper();
    threeBeepers();
    twoBeepers();
    threeBeepers();
    twoBeepers();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    
   
}

function threeBeepers(){
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
    turnLeft();
}

function twoBeepers(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
    putBeeper();
}