let game = {
    names: [['Mario', 'assets/images/Mario.png'], ['Luigi', 'assets/images/Luigi.png'], ['Donkey Kong', 'assets/images/DK.png'], ['Samus', 'assets/images/Samus.png'], ['Cpt Falcon', 'assets/images/Cfalcon.png'], ['Link', 'assets/images/Link.png'], ['Ness', 'assets/images/Ness.png'], ['Pikachu', 'assets/images/Pikachu.png'], ['Fox', 'assets/images/Fox.png'], ['Yoshi', 'assets/images/Yoshi.png'], ['Kirby', 'assets/images/Kirby.png']],
    guesses: 10,
    wins: 0,
    losses: 0,
    correct: [],
    guessed: [],
    gameOver: false,

    pickName: function() {
        return [Math.floor(Math.random() * this.names.length)];
    }
};

// Function to randomize character chosen
var character = game.pickName();
// Pick character name given index
var gameName =  game.names[character][0];
// Pick character image given index
var image = game.names[character][1];
// Split the character name into array
var arrGameName = gameName.split("");
// Make all the letters in the character name lowercase
var lowGameName = gameName.toLowerCase();

//Find the number of spaces in arrGameName
function findSpaces(arrName){
    var spaces = 0;
    for (i = 0; i < arrName.length; i++) {
        if (arrName[i] === " ") {
            spaces++;
        }
    }
    return spaces;
}

// Create this game board function based on chosen name
function createBoard(){
    for (i = 0; i < arrGameName.length; i++){
        if (arrGameName[i] === " ") {
            letterList = "<li style='border-bottom:none;margin:0 15px 0 5px' id='" + i + "' >" + arrGameName[i] + "</li>";
            document.getElementById('game').innerHTML += letterList;
        } else {
            letterList = "<li id='" + i + "'></li>";
            document.getElementById('game').innerHTML += letterList;
        }
    }
}

createBoard();

document.onkeyup = function(event) {
    // Turns event "key" to lowercase
    var key = String.fromCharCode(event.keyCode).toLowerCase(); 
    console.log("im running");
    // Check letters only
    if (event.keyCode > 64 && event.keyCode < 91) {
        if (game.guessed.indexOf(key) === -1) {
            if (lowGameName.indexOf(key) > -1) {
                game.guessed.push(key);
                game.correct.push(key);
                var index = lowGameName.indexOf(key);
                document.getElementById(index).innerHTML = key;
                if (lowGameName.indexOf(key, index +1) > -1) {
                    var otherIndex= lowGameName.indexOf(key, index + 1);
                    game.correct.push(key);
                    document.getElementById(otherIndex).innerHTML= key;
                }
                if (lowGameName.length - findSpaces(arrGameName) === game.correct.length) {
                    document.getElementById('you').innerHTML = "You";
                    document.getElementById('win-lose').innerHTML = "Win!";
                    document.getElementById('win-img').src = image;
                    game.wins++;
                    game.guesses = 10;
                    game.guessed = [];
                    game.correct = [];
                    setTimeout(function(){document.getElementById('game').innerHTML = "";}, 1000);
                    character = game.pickName();
                    gameName = game.names[character][0];
                    image = game.names[character][1];
                    arrGameName = gameName.split("");
                    lowGameName = gameName.toLowerCase();
                    setTimeout(function(){createBoard();}, 2000);
                }
            } else {
                game.guessed.push(key);
                game.guesses--;
            }
        }
    }
    if (game.guesses === 0) {
        document.getElementById('you').innerHTML = "You";
        document.getElementById('win-lose').innerHTML = "Lose!";
        game.losses++;
        game.guesses = 10;
        game.guessed = [];
        game.correct = [];
        document.getElementById('game').innerHTML = "";
        character = game.pickName();
        gameName = games.names[character][0];
        image = game.names[character][1];
        arrGameName = gameName.split("");
        lowGameName = gameName.toLowerCase();
        setTimeout(function(){createBoard();}, 2000);
    }
    // This displays once user clicks and updates with the clicks
    var html = '<p>Turns Left: ' + game.guesses + ' </p>' +
    '<p>Guessed Letters: ' + game.guessed.join(',') + '</p>' +
    '<p>Wins: ' + game.wins + '</p>' + 
    '<p>Losses: ' + game.losses + '</p>';

    document.querySelector('#stats').innerHTML = html;
}