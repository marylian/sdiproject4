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



validateEmail=function(emailAddress){
	var specialChar=["!", "@", "#", "@", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "/", "{", "}", "+", "=", "`", "~", "|"]; 
	var compEmail;
	var emailVal;
	var indexAt=emailAddress.indexOf("@");
	var indexDot=emailAddress.lastIndexOf(".");
	compEmail=emailAddress.substring (0, indexAt);
	for (var i=0; i<=specialChar.length; i++){
		var j;
		for (compEmail[j=0]; j<compEmail.length; j++){
			if (compEmail[j]==specialChar[i]){
				console.log("Check for invalid special characters in your email address.");
			}
		}
	}

	if (indexAt>indexDot){
		console.log("The email address you have entered is incorrect");
			
	}
	else{
		console.log("If you got an invalid special chacters message, you need to check that. Otherwise, your email address is valid.");
	}
};


validateNum = function(decimalNum){
	var decimalPos=decimalNum.indexOf(".");
	var x;
	var y;
	x=decimalNum.substring (0, decimalPos);
	z=decimalNum.indexOf(".");
	z=z+3;
	y=decimalNum.substring(decimalPos, z);
	console.log(x, y);
//	var result=decimalNum.toFixed(2);
//	console.log(result);
};

var phoneNumber="407-276-1427";
validateNumber(phoneNumber);
var emailAddress="p.utsav@gmail.com";
validateEmail(emailAddress);
var decimalNum="1304.2347389372047";
validateNum(decimalNum);


