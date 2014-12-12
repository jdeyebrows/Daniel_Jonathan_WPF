var gasEf = prompt("In order to determine whether or not you need to stop for fuel, \nenter your vehicle's gas efficiency in MPG:")  

var gRead = prompt("Now, enter the amount of gas you currently have as a percentage. What percent of your tank is full:")  

var carCap = prompt("How many gallons of gas does your vehicle hold?:")  

if(gasEf * carCap / gRead > 200) {
    console.log("You have enough gas to make the trip")
}else{
    console.log("You'd better fill up before making the drive")
}