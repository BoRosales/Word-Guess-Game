var game = InitializeGame();

 

function InitializeGame() {

  var game = {

    "numberWins": 0,

    "words": [

      {

        "word": "mario",

        "guessed" : false,

        "guessPicture" : "https://timedotcom.files.wordpress.com/2014/06/450345664.jpg",

        "guessedLetters": [],

        "remainingGuess": 10

      },

      {

        "word": "luigi",

        "guessed" : false,

        "guessPicture" : "https://timedotcom.files.wordpress.com/2014/06/450345664.jpg",

        "guessedLetters": [],

        "remainingGuess": 10

      },

      {

        "word": "bowser",

        "guessed" : false,

        "guessPicture" : "https://timedotcom.files.wordpress.com/2014/06/450345664.jpg",

        "guessedLetters": [],

        "remainingGuess": 10

      },

      {

        "word": "peach",

        "guessed" : false,

        "guessPicture" : "https://timedotcom.files.wordpress.com/2014/06/450345664.jpg",

        "guessedLetters": [],

        "remainingGuess": 10

        },

    ],

    "currentWord": {}

  }

 //Set current word and update the display for those characters

  SetCurrentWord(game);

  UpdateGameDisplay(game);

  return game;

}

 //functions

function SetCurrentWord(game) {

  for ( var word in game.words) {

    if(!word.guessed && game.currentWord != null)

    {

      game.currentWord = game.words[word];

    }

  }

}

 

function HandleGuess(guessedLetter) {

  console.log(guessedLetter);

  game.currentWord.guessedLetters.push(guessedLetter);

  UpdateGameDisplay(game)

}

 

function UpdateGameDisplay(game) {

  console.log(game);

  document.querySelector('.numberOfWins').textContent = game.numberWins;

  document.querySelector('.currentWordDisplay').textContent = ShowLetters(game);

  document.querySelector('.guessedLetters').textContent = game.currentWord.guessedLetters;

 

 

}

 

function ShowLetters(game) {

  var display = "";

  for (var i = 0; i < game.currentWord.word.length; i++) {

    if(game.currentWord.guessedLetters.indexOf(game.currentWord.word[i]) == -1 ) {

      display = display + " _ ";

    } else {

      display = display + " " + game.currentWord.word[i] + " ";

    }

  }

 

  return display;

}

 

document.onkeydown = function(evt) {

    HandleGuess(evt.key);

}