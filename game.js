class game {
    constructor() {

    }

    gameState() {
        var gameStateref = database.ref('gameState');
        gameStateref.on("value" , function(data) {
            gameState = data.val();
        })
    }

    update(state) {
      database.ref('/').update({
          gameState : state 
      })
    }

    start() {
        if(gameState === 0) {
            var player1 = new player();
            player1.getCount();
            
            var form1 = new form();
            form1.display();

            
        }
        
    }
}