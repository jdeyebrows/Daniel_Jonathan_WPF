/**
 * Jonathan Daniel Expressions_Industry 12/6/14.
 */

/* This is calculator for the number of web developers needed to build a website in a given number of days. */



var developers1 = prompt("We are calculating the number of web developers needed to complete a website in a given number of days based on a given set of variables . \nPlease enter the number of developers of your first given variables.")



var days1 = prompt("Enter the number of days the first number of developers will need to complete the website.")



var days2 = prompt("Enter the new number of days to determine how many developers you will need \nto complete the website in that number of days")



var developers2 = developers1 * days1 / days2; //calculates with that info

//console.log(volume); //prints it to console

alert("You will need" + " " + developers2 + " " + "developers to finish the website in" + days2 + "days.");
