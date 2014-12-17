/* Jonathan Daniel Functions Worksheet 12-15-2014 */

//Circumference

//Calculate the circumference of a circle

var radius = 12; //holds the value of the radius of the circle

var total = calcCircumference(radius, 2, 3.14); //variable assigned to the function call

function calcCircumference(a, b, c){ //indicates what values will be used

    var circumference = a * b * c; //variable within the function which uses multiplication to calculate circumference

    return circumference; //gives the command to return circumference value to designated variable
}
console.log("The Circumference of the circle is " + total); //prints the information collected by the variable assigned to the function call




//Stung

//Calculate the number of bee stings it would take to kill an animal based on weight in pounds

var weight = 270; //holds the value of the victim's weight in pounds

var total = calcStingNo(weight, 8.666666667); //variable assigned to the function call

function calcStingNo(a, b){ //indicates the values that will be used

    var stingNo = a * b; //variable within the function that uses multiplication to calculate number of stings needed

    return stingNo; //gives the command to return sting number to designated variable
}
console.log("It will take " + total + "stings to kill an animal that weighs " + weight + " pounds."); //prints the information collected by the variable to the function call





