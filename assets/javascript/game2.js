let game = {
    names: [['Mario'], ['Luigi'], ['Donkey Kong'], ['Peach'], ['Lucario'], ['Link'], ['Ness'], ['Pikachu'], ['Fox']],
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
// 
var gameName =  game.names[character][0];
//
var image = game.names[character][1];
//
var arrGameName = gameName.split("");
//
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

//
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
    var key = String.fromCharCode(event.keyCode < 91).toLowerCase(); 
    // Check letters only
    if (event.keyCode > 64 && event.keyCode < 91) {
        if (game.guessed.indexOf(key) === -1) {
            if (lowGameName.indexOf(key) > -1) {
                
            }
        }
    }
}