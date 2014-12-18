/* Jonathan Daniel Functions Personal 12-17-14 */


var currentMo = prompt("Please enter your average monthly earnings from your current job.") //Prompts the user to enter info to be passed to the variable
//Combined loop validation
while(currentMo==="" || isNaN(currentMo)){ //This while loop uses the or operator to compare the 2 conditions
    if(currentMo===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        currentMo=prompt("Please do not leave blank!\nPlease enter your earnings for month one"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{
        currentMo=prompt("Please only type in numbers!\nPlease enter your earning for month one"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

var monthOne = prompt("Please enter your earnings for month one.") //Prompts the user
//Combined loop validation
while(monthOne==="" || isNaN(monthOne)){ //This while loop uses the or operator to compare the 2 conditions
    if(monthOne===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        monthOne=prompt("Please do not leave blank!\nPlease enter your earnings for month one"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        monthOne=prompt("Please only type in numbers!\nPlease enter your earning for month one"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

var monthTwo = prompt("Please enter your earnings for month two") //Prompts the user
//Combined loop validation
while(monthTwo==="" || isNaN(monthTwo)){ //This while loop uses the or operator to compare the 2 conditions
    if(monthTwo===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        monthTwo=prompt("Please do not leave blank!\nPlease enter"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        monthTwo=prompt("Please only type in numbers!\nPlease enter"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

var monthThree = prompt("Please enter your earnings for month three") //Prompts the user
//Combined loop validation
while(monthThree==="" || isNaN(monthThree)){ //This while loop uses the or operator to compare the 2 conditions
    if(monthThree===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        monthThree=prompt("Please do not leave blank!\nPlease enter your earnings for month three"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        monthThree=prompt("Please only type in numbers!\nPlease enter your earning for month three"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

var earnAverage = calcAverage(monthOne, monthTwo, monthThree, 3); //This code defines the parameters
function calcAverage(a, b, c, d){ //Sets up the function call
    var hustleAverage = ( Number(a) + Number(b) + Number(c))/ d; //This is the code the function runs
    console.log(hustleAverage) //Prints the result to the console
    return hustleAverage; //Returns the Average to the variable
}

if(earnAverage > currentMo){ //This if statement presents the conditional to be tested
    console.log("It's a reasonable decision to spread your wings and fly!") //If the statement is true it is printed to the console
}else if(currentMo <= earnAverage + 500 ){ //This else if statement runs if the if statement is not true
    console.log("Since you'll be making a little less, you're going to have to find a way to earn a little extra to maintain of exceed your current salary.") //This result is printed to the console if the if else statement is true
}else{ //This else statement is the final decision in the process given that both the if and else if statements are false
    console.log("Don't starve! You need to hold on to your job for a little while longer.") //Prints the final result to the console
}