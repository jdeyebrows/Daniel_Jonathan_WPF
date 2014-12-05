/**
 * Jonathan Daniel Expressions_Personal 12/4/14.
 */

/* This is calculator for the volume of space needed to fit MIDI controller to workspace. */



var width = prompt("We are calculating the needed area for an inset MIDI controller space. \nPlease enter the width in inches.")



var height = prompt("Please enter the height in inches.")



var length = prompt("Enter the Length in inches")



var volume = width * height * length; //calculates with that info

//console.log(volume); //prints it to console

alert("The required volume for your MIDI controller inset space is" + volume + "inches");
