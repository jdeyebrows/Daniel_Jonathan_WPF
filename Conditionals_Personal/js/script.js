/**
 * Jonathan Daniel Conditionals_Professionals 12/11/14.
 */
//The Film Festival.  We have to determine if your fim meets the required standards to be included
//as part of our fall film festival.

//The Film Format prompt gathers the format information about the film entry.
var filmFormat = prompt("We need to determine that your film is in our required viewing format. \nPease verify " +
"your film's format by entering PAL or NTSC. Only these two formats are accepted for preview")

//The Fee Pail prompt determines whether the filmmaker has paid the required fees to secure their entry.
var feePaid = prompt("Have you already Completed your online submissions form? Enter Y for yes or N for No. If the " +
"submission deadline has already passed, your film cannot be accepted as the fee is due before the deadline.")

//The film length prompt records the running time of the film in which case may qualify a film in which
//the fee and online entry form has not been submitted considering the film is short enough to be shown as an extra
//and not eligible for cash prizes.
var filmLength = prompt("The time limit for all film submissions is 30 minutes. Please enter the running time of " +
"your film to determine if your film is eligible for entry. the fee is waived for films under 10 minutes and the online " +
"submission for is not required. These films will not be considered for cash prizes.")

//If the film is in the right format and fee has been paid before the deadline, print to the console "Your film has been accepted!"
