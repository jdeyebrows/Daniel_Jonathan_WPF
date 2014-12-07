/**
 * Jonathan Daniel Expressions_Wacky 12/6/14.
 */

/* This is calculator for the amount of hours you will have to work
to make your desired amount of money considering your wage and fee. */



var wage = prompt("This is a calculator for the amount of hours you will have to work to make your desired amount of money \nconsidering how much you make an hour minus my cut from your total. \nPlease enter The total dollar amount you want to be paid for this job.")



var dollarhr = prompt("Enter the amount per hour you have agreed to be paid.")



var mycut = prompt("Enter the dollar amount we have agreed would be my cut.")



var numHrs = wage / dollarhr - mycut; //calculates with that info

//console.log(volume); //prints it to console

alert("You will need to work" + " " + numHrs + " " + "hours making" + " " + dollarhr + " " + "dollars per hour to make the" + " " + wage + " " + "dollars.");