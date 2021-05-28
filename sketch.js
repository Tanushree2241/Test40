var database , game1 , gameState = 0 , playerCount , form1 , player1; 

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game1 = new game();
     game1.gameState();
     game1.start();
}

function draw(){
    background("white");
    
    
    
}


