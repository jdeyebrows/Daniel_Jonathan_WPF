/* Jonathan Daniel Functions Industry 12-18-14 */

//You have agreed to build a website for a client. He/she has requested imagery that you don't currently have.
//You have set a budget for some royalty free images sold as a pack. check to see if the package is to the requirements
//of your budget.




var stockPhotos = prompt("What is the price per photo in this package?") //Prompts the user
//Combined loop validation
while(stockPhotos==="" || isNaN(stockPhotos)){ //This while loop uses the or operator to compare the 2 conditions
    if(stockPhotos===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        stockPhotos=prompt("Please don't leave this field blank. What is the price per photo in this package?"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        stockPhotos=prompt("Please only enter numbers. What is the price per photo in this package?"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}


var numPhotos = prompt("How many royalty free photos are included in the package?") //Prompts the user
//Combined loop validation
while(numPhotos==="" || isNaN(numPhotos)){ //This while loop uses the or operator to compare the 2 conditions
    if(numPhotos===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        numPhotos=prompt("Please don't leave this field blank. How many royalty free photos are included in the package?"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        numPhotos=prompt("Please only enter numbers How many royalty free photos are included in the package?"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

var budget = prompt("What is your budget for royalty free images?") //Prompts the user
//Combined loop validation
while(budget==="" || isNaN(budget)){ //This while loop uses the or operator to compare the 2 conditions
    if(budget===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        budget=prompt("Please don't leave this field blank. What is your budget for royalty free images?"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        budget=prompt("Please only enter numbers. What is your budget for royalty free images?"); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}


var packTotal = calcTotal(stockPhotos, numPhotos); //This code defines the parameters
function calcTotal(a, b){ //Sets up the function call
    var packPrice = ( Number(a) * Number(b)); //This is the code the function runs
    return packPrice; //Returns the Average to the variable
}

console.log(packTotal);
doIBuy = (budget >= packTotal) ? "I can buy the stock photography and start on my client's website." : "I'd better search from some free images or come up with some original artwork."

console.log(doIBuy); //Prints the final result and decision to the console