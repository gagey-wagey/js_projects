let plays = ['rock', 'paper', 'scissors'];
let computerRandomSelection = Math.floor(Math.random() * 2);
let playerRandomSelection = Math.floor(Math.random() * 2);
let playerPlay;
let computerPlay;

playerPlay = getselection(playerRandomSelection);
computerPlay = getselection(computerRandomSelection);

if(playerPlay != computerPlay){
    console.log(`You played ${playerPlay} and the computer played ${computerPlay}`);
}
else{
    console.log(`You both played ${playerPlay} and tied!`);
}

function getselection(x){
    switch(Number(x)){
        case 0:
            return plays[0];
        case 1:
            return plays[1];
        case 2: 
            return plays[2];
        default:
            return "something went wrong...";
    }
}
