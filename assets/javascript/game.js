 
var movies = ["Pinocchio","Dumbo","Bambi","Cinderella","Aladdin","Pocahontas","Hercules","Mulan","Tarzan","Frozen"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var alreadyGuessed = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;



function Game() {
    
    randomWord = movies[Math.floor(Math.random() * movies.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}



function img() {
    
    if (randomWord === movies[0]) {
        document.getElementById("image").src = "assets/images/Pinocchio.jpg";
    }
    
    else if (randomWord === movies[1]) {
        document.getElementById("image").src = "assets/images/Dumbo.jpg";
    }
    
    else if (randomWord === movies[2]) {
        document.getElementById("image").src = "assets/images/Bambi.jpg";
    }
    
    else if (randomWord === movies[3]) {
        document.getElementById("image").src = "assets/images/Cinderella.jpg";
    }
    
    else if (randomWord === movies[4]) {
        document.getElementById("image").src = "assets/images/Aladdin.jpg";
    }
    
    else if (randomWord === movies[5]) {
        document.getElementById("image").src = "assets/images/Pocahontas.jpg";
    }
    
    else if (randomWord === movies[6]) {
        document.getElementById("image").src = "assets/images/Hercules.jpg";
    }

    else if (randomWord === movies[7]) {
        document.getElementById("image").src = "assets/images/Mulan.jpg";
    }

    else if (randomWord === movies[8]) {
        document.getElementById("image").src = "assets/images/Tarzan.jpg";
    }    

    else if (randomWord === movies[9]) {
        document.getElementById("image").src = "assets/images/Frozen.jpg";
    }

};



function reset() {
    guessesRemaining = 10;
    alreadyGuessed = [];
    blanksAndCorrect = [];
    Game()
}



function checkLetters(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        alreadyGuessed.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}



function complete() {
    console.log("Wins: " + wins + "| Losses: " + losses + "| Guesses Remaining: " + guessesRemaining)

    
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winscounter").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "assets/images/Try_Again.png"
        document.getElementById("lossescounnter").innerHTML = " " + losses;
    }
    
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}



Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    
    checkLetters(guesses);
    
    complete();
    
    console.log(guesses);

    
    document.getElementById("alreadyguessed").innerHTML = "  " + alreadyGuessed.join(" ");
}
   