validateNumber=function(phoneNumber){ //Procedure without any return.
if (phoneNumber.length==12){
    if (phoneNumber.charAt(3)=="-"){
        if (phoneNumber.charAt(7)=="-"){
            console.log("The format of your phone number is correct."); //Output if condition is met.
        }
    }
}    
else {
    console.log("The format of the number is invalid. Please retry."); //Output if condition is not met.
    }
};
var indexAt;
var indexDot;

validateEmail=function(emailAddress){
	indexAt=emailAddress.indexOf("@");
	indexDot=emailAddress.lastIndexOf(".");
	if (indexAt>indexDot){
		console.log("The email address you have entered is incorrect");
	}
	else{
		console.log("The email address you have entered is correct. Please proceed");
	}
};

var phoneNumber="407-276-1427";
validateNumber(phoneNumber);
emailAddress="p.utsav@gmail.com";
validateEmail(emailAddress);

