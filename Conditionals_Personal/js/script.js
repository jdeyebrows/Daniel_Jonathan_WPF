/* You want to get a great workout today, but you're not the best at time management.
You need to determine how many calories you want to burn. You also need to take into
consideration how many calories your favorite exercise burns per hour. Lastly, you
 already know how much time you have available to workout. Input the needed information
 to determine if your desired results are realistic based on the time limits of your workout
 and the number or calories your activity will allow you to burn.*/

var caloriesBrn = prompt("Enter the number of calories you need to burn by the end of your workout.")
    //This line of code prompts the user to enter the number of calories they wish to burn during their entire workout.
    console.log(caloriesBrn); //This prints the entered variable to the console.

var averageBrn = prompt("Enter the number of calories typically burned per minute doing your selected workout.")
    //This line of code prompts the user to enter the average number of calories burned per hour with selected workout.
    console.log(averageBrn); //This prints the entered variable to the console.

var timeToWorkout = prompt("Enter your intended workout time in hours. Round your entry to the nearest hour.")
    //This line of code prompts the user to enter their intended workout time rounded to the hour.
    console.log(timeToWorkout); //This prints the entered variable to the console.

var workOut;

workOut = (averageBrn * timeToWorkout >= caloriesBrn) ? "You can burn the planned number of calories in your selected workout time. Go for it!" : "You need to adjust how many calories you plan to burn or how long you should workout."
console.log(workOut)