/* Jonathan Daniel Conditionals Wacky 12/11/14 */

/* You've been commissioned to design a 3D scene for a short animated film.
 * The only problem is that your freeloading friend has borrowed your most
  * powerful computer and kept it way longer than you agreed they could.
  *
  * You have the same software on a slower computer and a very cool model you
  * recently sculpted and would like to start with, but your secondary computer
  * tends to freeze up and fails to handle objects with a very high number of
  * polygons. The prompts will collect the number of polygons in your object,
  * compare it to the polygon limit of the machine you are using, and determine
  * whether or not your primary machine has been returned.*/

var machLimit = prompt("You have been commissioned to design a 3D scene for a short film. What is the highest number of polygons you can have in a character model for it to work effectively in the scene.");
//This portion of code collects the information about the polygon limit of the secondary machine.

var modelPoly = prompt("Enter the number of polygons in your character model.");
//This portion of code collects the value for the number of polygons in the model the user wishes to use.

var machRtn = prompt("Has your freeloading friend showed up with your machine yet? Yes or No");

var Yes = true;

if(modelPoly <= machLimit || machRtn === Yes){
    console.log("You can use the character model with little or no problems.");
}else{
    console.log("You'd better find a lower poly character model.")
}