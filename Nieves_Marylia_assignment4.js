validateNumber=function(phoneNumber){ //Procedure without any return.
if (phoneNumber.length==12){
//    console.log ("The phone number you have entered is invalid. Please retry");
    if (phoneNumber.charAt(3)=="-"){
//        console.log("The format of the phone number is invalid. Please retry")
        if (phoneNumber.charAt(7)=="-"){
            console.log("The format of your phone number is correct."); //Output if condition is met.
        }
    }
}    
else {
    console.log("The format of the number is invalid. Please retry."); //Output if condition is not met.
    }
};
var phoneNumber="407-276-1427";
validateNumber(phoneNumber);