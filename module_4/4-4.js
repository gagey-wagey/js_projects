let randomValue = Math.floor(Math.random() * 7);
let input = prompt("Enter a number 0-7");
let response;

switch(randomValue){
    case 0:
        response = "You rolled a 0. Sleep it off!";
        break;
    case 1:
        response = "You rolled a 1. Step it up!";
        break;
    case 2:
        response = "You rolled a 2. No idea!";
        break;
    case 3:
        response = "You rolled a 3. Turning it around!";
        break;
    case 4:
        response = "You rolled a 4. sucks to suck!";
        break;
    case 5:
        response = "You rolled a 5. Sleep it off!";
        break;
    case 6:
        response = "You rolled a 6. Look at you!";
        break;
    case 7:
        response = "You rolled a 7. Crushing it!";
        break;
    default:
        response = "OOOPS unexpected result.";
        break;
}

console.log(`${input} \n ${response}`);

