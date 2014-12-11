
var caloriesBrn = prompt("Enter the number of calories you need to burn by the end of your workout.")

var averageBrn = prompt("Enter the number of calories burned per minute doing your selected workout.")

var timeToWorkout = prompt("Enter your intended workout time in hours.")

var workOut;

workOut = (averageBrn * timeToWorkout => caloriesBrn) ? "You can burn the planned number of calories in your selected workout time. Go for it!" : "You need to adjust how many calories you plan to burn or how long you should workout."
console.log(workOut)