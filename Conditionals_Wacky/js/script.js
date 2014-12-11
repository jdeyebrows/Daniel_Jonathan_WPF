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

if (machLimit == ""){
    prompt("You must enter something for this field.");
}

var modelPoly = prompt("Enter the number of polygons in your character model.");
//This portion of code collects the value for the number of polygons in the model the user wishes to use.

var machRtn = prompt("Has your freeloading friend just showed up with your machine. true or false");
//This portion or code collects the statement true or false as to whether the user's friend has returned with their machine.

if(modelPoly <= machLimit || machRtn === true){ //This line of code executes the logical operator and evaluates the poly limit and
    //poly number in the character model and uses the OR operator to factor in whether or not the friend brings the machine back in time.
    console.log("You can use the character model with little or no problems."); //This line of code prints the result to the console.
}else{ //This line of code executes the last resort in the condition that none of the above variables are in favor of the user's character
    //model being used.
    console.log("You'd better find a lower poly character model.") ////This line of code prints the result to the console.
}