/* You want to get a great workout today, but you're not the best at time management.
You need to determine how many calories you want to burn. You also need to take into
consideration how many calories your favorite exercise burns per hour. Lastly, you
 already know how much time you have available to workout. Input the needed information
 to determine if your desired results are realistic based on the time limits of your workout
 and the number or calories your activity will allow you to burn.*/

var caloriesBrn = prompt("Enter the number of calories you need to burn by the end of your workout.")
    //This line of code prompts the user to enter the number of calories they wish to burn during their entire workout.

var averageBrn = prompt("Enter the number of calories typically burned per hour doing your selected workout.")
    //This line of code prompts the user to enter the average number of calories burned per hour with selected workout.

var timeToWorkout = prompt("Enter your intended workout time in hours.")
    //This line of code prompts the user to enter their intended workout time.

var workOut; //This line of code identifies the workout variable.

workOut = (averageBrn * timeToWorkout >= caloriesBrn) ? "You can burn the planned number of calories in your selected workout time. Go for it!" : "You need to adjust how many calories you plan to burn or how long you should workout."
    //This line of code uses multiplication with average burn per hour and workout time and determines if the user will
    //burn equal to or greater than their desired number of calories based on their exercise and time limit.
    console.log(workOut) //This line of code prints the resulting workout variable information to the console.