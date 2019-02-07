var $ = function (id) {
    return document.getElementById (id); 
}

var game = ["Pinocchio","Dumbo","Bambi","Cinderella","Aladdin","Pocahontas","Hercules","Mulan","Tarzan","Frozen"]
var choice = Math.floor(Math.random()*10);
var answer = game[choice];
var myLength = answer.length
var display = [myLenght];
var win = myLength;
var letters = answer.split("");
var attemptsLeft = 10;
var output = "",


var setup = function() {

    for (var i=0; i < answer.length; i++) {

        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output = "";

}

var submit = function() {

    output = " ";
    userLetter = $("letters").value;
    $("letters").value = " ";


    for (var c=0; c < answer.length; c++) {
        alert(letters[c]);
        if(userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
        }
            output = output + display[c] + " ";

    }

    document.getElementById("game").innerHTML = output;
    output = " ";
    attemptsLeft--;

    if(win < 1) {
        document.getElementById("guesses").innerHTML = "You win!";
    }

    else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = "You lose!";
    }

    else {
        document.getElementById("guesses").innerHTML = "Number of Guesses Remaining: "
    }

}


window.onload = function() {
    setup();
    $("submit").onclick = submit;
}
    
"<p>Wins: " + win + "</p>";

"<p>Number of Guesses Remaining: " + attemptsLeft + "</p>";         
        
    