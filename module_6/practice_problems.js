/**
 * 6.1
 * 1. Create a function that takes two parameters, adds the parameters together, and returns the result.
 * 2. Set up two different variables with two different values.
 * 3. Use your function on the two variables, and output the result using
 * console.log.
 * 4. Create a second call to the function using two more numbers as arguments
 * sent to the function.
 */
function addNums(num1, num2){
    return num1 + num2;
}

let numArg1 = 5;
let numArg2 = 10;

console.log(addNums(numArg1,numArg2));

/**
 * 6.2
 * 1. Create an array of descriptive words.
 * 2. Create a function that contains a prompt asking the user for a name.
 * 3. Select a random value from the array using Math.random.
 * 4. Output into the console the prompt value and the randomly selected array value.
 * 5. Invoke the function.
*/
let descriptiveWords = ["fun", "athletic", "interesting"];

function enterName(){
    let userInput = prompt("Please enter name: ");

    let outputText = `${descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)]} ${userInput}`;
    console.log(outputText);
}

enterName();

// 6.5
// 1. Create a variable value with let and assign a string value of 1000 to it.
// 2. Create an IIFE function and within this function scope assign a new value to a 
// variable of the same name. Within the function, print the local value to the console.
// 3. Create an IIFE expression, assigning it to a new result variable, and assign a new 
// value to a variable of the same name within this scope. Return this local value to the 
// result variable and invoke the function. Print the result variable, along with the variable 
// name you've been using: what value does it contain now?
// 4. Lastly, create an anonymous function that has a parameter. Add logic that will assign a 
// passed-in value to the same variable name as the other steps, and print it as part of a string 
// sentence. Invoke the function and pass in your desired value within the rounded brackets.

let stringValue = "1000";

(() => {
    stringValue = "IIFE";
    console.log(`Inside the IIFE scope: ${stringValue}`);
})();

let result = () => {
    let stringValue = "2nd IIFE";
    console.log(`Inside the 2nd IIFE scope: ${stringValue}`);
};
result();

(() => {
    console.log(`Anonymous the IIFE scope: ${stringValue}`);
})(stringValue);

//6.6 factorial calculator

function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function:", nr);
}
logRecursive(3);

function factorialCalc(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return num * factorialCalc(num - 1);
    }
}

factorialCalc(4);
