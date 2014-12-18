/* Jonathan Daniel Functions Personal 12-17-14 */


var currentMo = prompt("Please enter your average monthly earnings from your current job.") //Prompts the user
//Combined loop validation
while(currentMo==="" || isNaN(currentMo)){
    if(currentMo===""){
        //This re-prompts the user
        currentMo=prompt("Please do not leave blank!\nPlease enter your earnings for month one");
    }else{
        currentMo=prompt("Please only type in numbers!\nPlease enter your earning for month one");
    }
}

var monthOne = prompt("Please enter your earnings for month one.") //Prompts the user
//Combined loop validation
while(monthOne==="" || isNaN(monthOne)){
    if(monthOne===""){
        //This re-prompts the user
        monthOne=prompt("Please do not leave blank!\nPlease enter your earnings for month one");
    }else{
        monthOne=prompt("Please only type in numbers!\nPlease enter your earning for month one");
    }
}

var monthTwo = prompt("Please enter your earnings for month two") //Prompts the user
//Combined loop validation
while(monthTwo==="" || isNaN(monthTwo)){
    if(monthTwo===""){
        //This re-prompts the user
        monthTwo=prompt("Please do not leave blank!\nPlease enter");
    }else{
        monthTwo=prompt("Please only type in numbers!\nPlease enter");
    }
}

var monthThree = prompt("Please enter your earnings for month three") //Prompts the user
//Combined loop validation
while(monthThree==="" || isNaN(monthThree)){
    if(monthThree===""){
        //This re-prompts the user
        monthThree=prompt("Please do not leave blank!\nPlease enter your earnings for month three");
    }else{
        monthThree=prompt("Please only type in numbers!\nPlease enter your earning for month three");
    }
}

var earnAverage = calcAverage(monthOne, monthTwo, monthThree, 3);
function calcAverage(a, b, c, d){
    var hustleAverage = ( Number(a) + Number(b) + Number(c))/ d;
    console.log(hustleAverage)
    return hustleAverage;
}

if(earnAverage > currentMo){
    console.log("It's a reasonable decision to spread your wings and fly!")
}else if(currentMo <= earnAverage + 500 ){
    console.log("Since you'll be making a little less, you're going to have to find a way to earn a little extra to maintain of exceed your current salary.")
}else{
    console.log("Don't starve! You need to hold on to your job for a little while longer.")
}