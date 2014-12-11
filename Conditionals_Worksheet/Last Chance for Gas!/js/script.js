/*
Conditionals Worksheet Jonathan Daniel 12/10/2014.
Last Chance for Gas
 */

//A driver has to determine if they can make it across the desert with their current fuel.
// They are about to past the last gas station for the next 200 miles and they need to determine
// whether they should stop now for gas or not.

var gasEfficiency = prompt ("In order to determine whether or not you need to stop for fuel, \nenter your vehicle's gas efficiency in MPG:");
//This line of code is to be used to collect data related to the fuel efficiency of the vehicle.

var quageReading = prompt ("Now, enter the amount of gas you currently have as a percentage. What percent of your tank is full:);
//This line of code is to be used to collect the percentage of fuel the vehicle currently has.

var carCapacity = prompt ("Now, enter your car's gas tank capacity:");
//This line of code ot to be used to collect the vehicle's fuel capacity.

//If the vehicle has enough fuel  or is fuel efficient to make it on the current amount of fuel.
if(){gasEfficiency * carCapacity / quageReading > 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have X gallons of gas in your tank, better get gas now while you can!");
}



