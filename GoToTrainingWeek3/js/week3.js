/*
Jonathan Daniel
SDI Section #04
Go To Training Week #3
12-12-2014
 */

//alert("Testing to Make Sure We are Working")

//create code that sorts through an array of fruit names and picks out pears

//Create our "fruit bowl" array

var bowlOfFruit = ["apple","apple","banana","pear","peach","pear","tomato","kiwi","pear","banana","pear"];

//This console logs the WHOLE array
console.log(bowlOfFruit);

//How can I get one fruit inside of the bowl?
console.log(bowlOfFruit [1]);

//How many fruits are in the bowl?
//How many items are in an array?
//Length of the array
// Dot Syntax - "use a period!"
console.log(bowlOfFruit.length);

//What was the last index number of the array, using the length property?
//Last index number is ALWAYS one less than the length.
//bowlOfFruit.length - 1  =Last index #.


//Create a variable to track the number of pears we have
var totalNumPears = 0;


//Test each item and see if it is a pear
//(if(condition to test) { code to run if true }

if(bowlOfFruit[0]==="pear"){
    //this will run if true
    //add to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!");
}

if(bowlOfFruit[1]==="pear"){
    //this will run if true
    //add to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!");
}

if(bowlOfFruit[2]==="pear"){
    //this will run if true
    //add to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!");
}

if(bowlOfFruit[3]==="pear"){
    //this will run if true
    //add to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!");
}

//Report how many pears we have
console.log("There are "+totalNumPears+" number of pears in the bowl");

//We want the computer to do the "heavy lifting" for us


//Create a new tracking variable for number of pears
var pearNumber= 0;


//Create a loop for repetitive code

//For Loop - is great for when you know how many times it should run
// for(initialize a counting variable; codition to test; incremental change)
// { code to run each loop around }

for(var i=0;i<bowlOfFruit.length; i++ ){
    console.log("Inside of the loop"+i);
    console.log(bowlOfFruit[i]);

    //Test each fruit if it is a pear
    if(bowlOfFruit[i]==="pear") {
        //Add to our pear total
        pearNumber++;
        console.log("This fruit is a pear!");
    }else{
        console.log("This fruit is not a pear!");

    }


}

console.log("Total number of pears in the bowl is "+pearNumber);