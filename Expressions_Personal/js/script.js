/**
 * Jonathan Daniel Expressions_Personal 12/4/14.
 */

/* This is calculator for the volume of space needed to fit MIDI controller to workspace. */



var width = prompt("We are calculating the needed area for an inset MIDI controller space. \nPlease enter the width in inches without unit.")
//this line of code records the with of the MIDI controller.


var height = prompt("Please enter the height in inches without unit.")
//this line of code records the height of the midi controller.


var length = prompt("Enter the Length in inches without unit")
//this line of code records the


var volume = width * height * length; //calculates the variables collected from the 3 prompts using multiplication to determine area.

//console.log(volume); //prints it to console

alert("The required volume for your MIDI controller inset space is" + " " + volume + " " + "inches");
