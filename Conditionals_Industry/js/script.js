/**
 * Jonathan Daniel Conditionals Industry 12/11/14.
 */

/* Here, the user will evaluate the salary, and increased earning opportunity of a job they are interviewing for.
They have been guaranteed the job and are in the process of making a decision. Their decision will be based on
whether or not the job meets the user's salary. If the user's asking salary is not entirely met , the final decision
will depend on whether the company offers desirable annual raises.
 */

var salaryReq = prompt("Please let us know your desired salary.")
//This line of code prompts the user to enter their ideal salary.

var salaryMin = prompt("Please let us know the minimum salary you will accept.")
//This line of code prompts the user to enter their minimum accepted salary.

var salaryNeg = prompt("The employer offers you a $2,000 raise in a year. If the new negotiated salary is equal to or greater than your minimum salary, you will take the job. Please enter the new negotiated salary.")
//This line of code prompts the user to enter the new salary offered by the employer.

if(salaryReq <= salaryNeg){ //This line of code compares the value of the entered variables from the prompt.
    console.log("I'd be happy to take this job!"); //This line of code prints the results of that statement to the console.
}else if(salaryNeg >= salaryMin){ //
    console.log("Considering the new negotiated salary and the $2,000 raise in a year, I am willing to take this job.")
}else{
    console.log("I appreciate the opportunity, but I think I will try some other options.")
}


