/* Jonathan Daniel Functions Industry 12-18-14 */






var stockPhotos = prompt("") //Prompts the user
//Combined loop validation
while(stockPhotos==="" || isNaN(stockPhotos)){ //This while loop uses the or operator to compare the 2 conditions
    if(stockPhotos===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        stockPhotos=prompt(""); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        stockPhotos=prompt(""); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}


var photoFolders = prompt("") //Prompts the user
//Combined loop validation
while(photoFolders==="" || isNaN(photoFolders)){ //This while loop uses the or operator to compare the 2 conditions
    if(photoFolders===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        photoFolders=prompt(""); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        photoFolders=prompt(""); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}

var budget = prompt("What is your budget for royalty free images?") //Prompts the user
//Combined loop validation
while(budget==="" || isNaN(budget)){ //This while loop uses the or operator to compare the 2 conditions
    if(budget===""){ //This if statement determine whether or not the user will be re-prompted based on input
        //This re-prompts the user
        budget=prompt(""); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }else{ //This line of code runs if the the field is not blank but is not a number
        budget=prompt(""); //Prompts the user after incorrect data is entered to enter info to be passed to the variable
    }
}


var packTotal = calcTotal(stockPhotos, photoFolders); //This code defines the parameters
function calcTotal(a, b){ //Sets up the function call
    var packPrice = ( Number(a) * Number(b)); //This is the code the function runs
    return packPrice; //Returns the Average to the variable
}

console.log(packTotal);
doIBuy = (budget >= packTotal) ? "I can buy the stock photography and start on my client's website." : "I'd better search from some free images or come up with some original artwork."

