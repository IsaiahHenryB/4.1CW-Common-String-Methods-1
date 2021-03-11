alert("Hey, this works!")

// 1
// Prompt user to enter their favorite candy and store it in a variable named `myFavoriteCandy`.
var myFavoriteCandy = prompt("What's your favorite candy?");


// 2
// Get the length of `myFavoriteCandy` and print to the console.
console.log(myFavoriteCandy.length)

// 3
// Get the character at index 0 of `myFavoriteCandy`. 
// What are two ways you can get the character at index 0? Write both ways.
console.log(myFavoriteCandy[0]);
console.log(myFavoriteCandy.charAt(0))

// 4
// Transform the string stored in `myFavoriteCandy` to all lowercase. Print to the console.
let upperFood = myFavoriteCandy.toLowerCase();
console.log(upperFood);

// 5
// Get the index of the character 'u'. Print result to the console. What will be returned if there is no 'u' in the string stored in `myFavoriteCandy`? 
console.log(myFavoriteCandy.indexOf("u"));
// -1

// 6 - Challenge 
// Prompt user to enter two numbers and print the result of the two numbers multiplied together into the console. Use string interpolation to print a nicely formatted ouput to the user.
let numOne = prompt("Enter a number");
while (numOne !== parseInt(numOne, 10).toString()) {
    alert("Please enter only numbers!");
    numOne = prompt("Enter number");
}
let numTwo = prompt("Enter a another number");
while (numTwo !== parseInt(numTwo, 10).toString()) {
    alert("Please enter only numbers!");
    numTwo = prompt("Enter number");
}
let realNumOne = Number(numOne);
let realNumTwo = Number(numTwo);
console.log(`${realNumOne*realNumTwo}`)

// 7 - Challenge
// What if a user enters a value that is *not* a number in step 6? 
// How can you validate the user input to make sure only a number can be entered? 
// Note: This problem is not within scope of this unit. You will need to use Google!
// DID THIS PART ABOVE :)