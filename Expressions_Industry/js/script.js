/**
 * Jonathan Daniel Expressions_Industry 12/6/14.
 */

/* This is calculator for the number of web developers needed to build a website in a given number of days. */



var developers1 = prompt("We are calculating the number of web developers needed to complete a website in a given number of days based on a given set of variables . \nPlease enter the number of developers of your first given variables.")
//This line of code collects a variable that represents a given number on web developers.


var days1 = prompt("Enter the number of days the first number of developers will need to complete the website.")
//This line of code collects a variable that represents a given number of days the given number of web developers to finish the website.


var days2 = prompt("Enter the new number of days to determine how many developers you will need \nto complete the website in that number of days")
//This line of code collects the new number of days to be used to determine how many developers will be needed.


var developers2 = developers1 * days1 / days2;
//This line of code uses multiplication and division to determine the number of web developers will be needed to complete the website in the new number of days.

console.log(developers2); //prints it to console

alert("You will need" + " " + developers2 + " " + "developers to finish the website in" + days2 + "days.");
//This line of code alerts the user and displays the accurate calculated answer.