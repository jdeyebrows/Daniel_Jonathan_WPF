/**
 * Jonathan Daniel Expressions_Wacky 12/6/14.
 */

/* This is calculator for the amount of hours you will have to work
to make your desired amount of money considering your wage and fee. */



var wage = prompt("This is calculator for the amount of hours you will have to work to make your desired amount of money \nconsidering how much you hake and hour and fee. \nPlease enter The total dollar amount you want to be paid for this job.")



var dollarhr = prompt("Enter the amount per hour you have agreed to be paid.")



var mycut = prompt("Enter the dollar amount we have agreed would be my cut.")



var numHrs = wage / dollarhr - mycut; //calculates with that info

//console.log(volume); //prints it to console

alert("You will need to work" + " " + numHrs + " " + "making" + " " + dollarhr + " " + " dollars an hour to make the" + " " + wage + " " + "dollars.");