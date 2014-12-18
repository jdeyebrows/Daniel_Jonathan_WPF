/* Jonathan Daniel Functions Wacky 12-18-14 */

//Countdown to Destruction

//Your computer has just been infected (Sorry)
//The virus was designed to corrupt 4 gigabytes of the data on your computer each hour.
//Depending on how big your hard drive is, this could happen slowly over a period of time or very quickly.
//The problem is that you just blindly picked a hard drive without paying attention to it's capacity,
//and will have to randomly find out how much space you have. Fortunately, you can determine the minimum
//and maximum capacity.

//This variable prompts the user for the maximum value
var maxGig = prompt("Please enter the maximum amount of data storage you think you might have on your hard drive");
//Combined loop validation
while(maxGig==="" || isNaN(maxGig)){ //This while loop uses the or operator to compare the 2 conditions
    if(maxGig===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        maxGig=prompt("Please do not leave blank!\nPlease enter the maximum amount of data storage you think you might have."); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        maxGig=prompt("Please only type in numbers!\nPlease enter the maximum amount of data storage you think you might have."); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

//This variable prompts the user for the minimum value
var minGig = prompt("Please enter the minimum amount of data storage you think you might have on your hard drive");
//Combined loop validation
while(minGig==="" || isNaN(minGig)){ //This while loop uses the or operator to compare the 2 conditions
    if(minGig===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        minGig=prompt("Please do not leave blank!\nPlease enter the minimum amount of data storage you think you might have."); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        minGig=prompt("Please only type in numbers!\nPlease enter the minimum amount of data storage you think you might have."); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

