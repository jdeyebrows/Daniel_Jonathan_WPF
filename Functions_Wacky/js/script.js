/* Jonathan Daniel Functions Wacky 12-18-14 */
//Your silly boss has decided to only play you according to your score on his silly random game.
// This could work out great or horribly. You have to pick

var xxxxx = prompt("Please enter ") //Prompts the user
//Combined loop validation
while(xxxxx==="" || isNaN(xxxxx)){
    if(xxxxx===""){
        //This re-prompts the user
        xxxxx=prompt("Please do not leave blank!\nPlease enter ");
    }else{
        xxxxx=prompt("Please only type in numbers!\nPlease enter ");
    }
}
