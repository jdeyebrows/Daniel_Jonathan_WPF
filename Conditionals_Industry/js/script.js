/**
 * Jonathan Daniel Conditionals Industry 12/11/14.
 */

/* Here, the user will evaluate the salary, and increased earning opportunity of a job they are interviewing for.
They have been guaranteed the job and are in the process of making a decision. Their decision will be based on
whether or not the job meets the user's salary. If the user's asking salary is not entirely met , the final decision
will depend on whether the company offers desirable annual raises.
 */

var salaryReq = prompt("Please let us know your desired salary.")

var salaryMin = prompt("Please let us know the minimum salary you will accept.")

var salaryNeg = prompt("The employer offers you a $2,000 raise in a year. If the new negotiated salary isn't within $2000 of your minimum salary, you will not to take the job. Please enter the new negotiated salary.")

if(salaryReq <= salaryNeg){
    console.log("I'd be happy to take this job!");
}else if(salaryNeg + 2000 >= salaryMin){
    console.log("Considering the new negotiated salary is within $2,000 of my asking salary, I am willing to take this job.")
}else{
    console.log("I appreciate the opportunity, but I think I will try some other options.")
}


