/**
 * Jonathan Daniel Expressions_Wacky 12/6/14.
 */

/* This is calculator for the amount of hours you will have to work
to make your desired amount of money considering your wage and fee. */



var wage = prompt("We are calculating the number of web developers needed to complete a website in a given number of days based on a given set of variables . \nPlease enter the number of developers of your first given variables.")



var numberhr = prompt("Enter the number of days the first number of developers will need to complete the website.")



var mycut = prompt("Enter the new number of days to determine how many developers you will need \nto complete the website in that number of days")



var developers2 = wage * numberhr - mycut; //calculates with that info

//console.log(volume); //prints it to console

alert("You will need" + " " + developers2 + " " + "developers to finish the website in" + days2 + "days.");