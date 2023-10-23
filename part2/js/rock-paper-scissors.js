/*eslint-env browser*/
/*jslint-env browser*/

function getComputersChoice(){
    "use strict";
    var computersChoice;
    var randomNumber = (Math.floor(Math.random() * 10)) % 3;
    if(randomNumber === 0){
        computersChoice = "Rock";
    } else if(randomNumber === 1){
        computersChoice = "Paper";
    } else{
        computersChoice = "Scissor";
    }

    return computersChoice;
}

function gameFunc(playersChoice){
    "use strict";
    var lose = "You Lose";
    var win = "You Win";
    var draw = "Its a draw";
    var computersChoice = getComputersChoice();
    switch(playersChoice){
        case "Rock":
            if(computersChoice === "Scissor"){
                window.alert("Rock destroys Scissor " + win);
            } else if(computersChoice === "Paper"){
                window.alert("Paper covers Rock " + lose);
            } else {
                window.alert("Both players selected Rock " + draw)
            }
            break;
        case "Scissor":
            if(computersChoice === "Rock"){
                window.alert("Rock destroys Scissor " + lose);
            } else if(computersChoice === "Paper"){
                window.alert("Scissor cuts paper " + win);
            } else {
                window.alert("Both players selected Scissor " + draw)
            }
            break;
        case "Paper":
            if(computersChoice === "Rock"){
                window.alert("Paper covers Rock " + win);
            } else if(computersChoice === "Scissor"){
                window.alert("Scissor cuts paper " + lose);
            } else {
                window.alert("Both players selected Paper " + draw)
            }
            break;
        default:
            window.alert("Please select valid choice from Rock, Paper, Scissor");
            break;

    }
}

var quit = false;
while(!quit){
    var playersChoice = window.prompt("Enter your choice (any one from Rock, Paper, Scissor)");
    gameFunc(playersChoice);
    var playAgain = window.prompt("Do you want to play again (Press y for yes)");
    if(playAgain != "y"){
        window.alert("Thank you for playing");
        quit = true;
    }
}
