/* Car Pressure I */

var pressure = prompt("Enter the air pressure of each of your tires starting with the front two tires then the back two tires. Enter the values seperated by commas.")

if(pressure[0] != pressure[1] || pressure[2] != pressure[3]){
    console.log("Your tires are not properly balanced.")
}else{
    console.log("Your tires are properly balanced. Drive safely")
}