class player {
    constructor() {
    }

    getCount() {
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value" , function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {
     database.ref('/').update({
         playerCount : count
     })
    }

    update(name) {
        var index1 = "player" + playerCount;
        database.ref(index1).set({
            name : name
        })
    }
}