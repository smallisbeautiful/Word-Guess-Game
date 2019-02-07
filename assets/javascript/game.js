var $ = function (id) {
    return document.getElementById (id); 
}

var game = ["Pinocchio","Dumbo","Bambi","Cinderella","Aladdin","Pocahontas","Hercules","Mulan","Tarzan","Frozen"]
var choice = Math.floor(Math.random()*10);
var answer = game[choice];
var myLength = answer.length
var display = [myLenght];
war win = myLength;
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

    
"<p>Wins: " + wins + "</p>";

        
        
    