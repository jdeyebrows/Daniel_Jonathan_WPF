/**
 * Jonathan Daniel Expressions_Wacky 12/6/14.
 */

/* Think of any paycheck amount, any pay rate, and any commission per sale.
and apply those choices in the variables below.
 */



/* This is a calculator for the amount of hours you will have to work a weird and dangerous job
to make your desired amount of money considering your wage and fee. */



var wage = prompt("This is a calculator for the amount of hours you will have to work to make your desired amount of money \nconsidering how much you make an hour minus my cut from your total. \nThis job is very wierd and dangerous, so make it worth it. Please enter The total dollar amount you want to be paid for this job.")
//This line of code prompts the user to enter the total paycheck amount desired.


var dollarhr = prompt("Enter the amount per hour you have agreed to be paid to do a job so stupid.")
//This line of code prompts the user to enter the amount of money agreed to be paid.


var mycut = prompt("Enter the dollar amount we have agreed would be my cut as commission and a constant reminder to you of how you can be talked into anything.")
//This line of code prompts the user to enter agreed upon commission dollar amount which will be subtracted from total earnings.


var numHrs = wage / dollarhr - mycut; //calculates the variables entered into the prompts using division and subtraction.

console.log(volume); //prints it to console

alert("You will need to work" + " " + numHrs + " " + "hours making" + " " + dollarhr + " " + "dollars per hour to make the" + " " + wage + " " + "dollars.");
//This line of code displays an alert to the user with the accurately calculated results based on the entered variables.