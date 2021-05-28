class form {
    constructor() {

    }

    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(620,100);

        var input = createInput('Name');
        input.position(600,250);

        var button = createButton('play');
        button.position(750,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var name = input.value();
            var greeting = createElement('h4');
            greeting.html("Welcome " + name);
            greeting.position(620,300);

            playerCount = playerCount +1;
            player1.update(name);
            player1.updateCount();
        })
    }
}