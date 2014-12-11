var gasEf = prompt("In order to determine whether or not you need to stop for fuel, \nenter your vehicle's gas efficiency in MPG:")  

var gRead = prompt("Now, enter the amount of gas you currently have as a percentage. What percent of your tank is full:")  

var carCap = prompt("Now, enter your car's gas tank capacity:")  

if(){gasEf * carCap / gRead > 200){ 
    console.log("Yes, you can make it without stopping for gas!"); 
}else{ 
    console.log("You only have X gallons of gas in your tank, better get gas now while you can!"); }    
