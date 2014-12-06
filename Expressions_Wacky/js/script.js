/**
 * Jonathan Daniel Expressions_Wacky 12/6/14.
 */

/* This is calculator for the amount of hours you will have to work
to make your desired amount of money considering your wage and fee. */



var wage = prompt("This is calculator for the amount of hours you will have to work to make your desired amount of money \nconsidering how much you hake and hour and fee. \nPlease enter the number of developers of your first given variables.")



var numberhr = prompt("Enter the amount per hour you have agreed to be paid.")



var mycut = prompt("Enter the dollar amount you have agreed to pay.")



var developers2 = wage * numberhr - mycut; //calculates with that info

//console.log(volume); //prints it to console

alert("You will need" + " " + developers2 + " " + "developers to finish the website in" + days2 + "days.");