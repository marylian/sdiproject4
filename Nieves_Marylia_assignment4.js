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
	var x=decimalNum.substring (0, decimalPos);
	var z=decimalNum.indexOf(".");
	z=z+3;
	var y=decimalNum.substring(decimalPos, z);
	console.log(x, y);
//	var result=decimalNum.toFixed(2);
//	console.log(result);
};

convString = function(stringNum){
	var count=0;
	for (numConv=0; numConv<stringNum.length; numConv++){
		count++;
	}
	var numConv=stringNum.substring(0, count);
	console.log(numConv);
};

sumNum = function(mixedArray){
	var sum=0;
	for (i=0; i<=mixedArray.length; i++){
			if (isNaN(mixedArray[i]%2)){
				i++;
			}
			else{
				sum=sum+mixedArray[i];
			}
	}
	console.log(sum);
};

percentRadius = function(givenNum, constNum, percent){
	var convConstNum=(constNum*(percent/100));
	convConstNum=(constNum+convConstNum);
	if (givenNum<convConstNum){
		console.log("The given number is below the percentage of constant number");
	}
	else{
		console.log("The given number is above the percentage of constant number");
	}
	
};

var phoneNumber="407-276-1427";
validateNumber(phoneNumber);
var emailAddress="p.utsav@gmail.com";
validateEmail(emailAddress);
var decimalNum="11234.2347389372047";
validateNum(decimalNum);
var stringNum="43827";
convString(stringNum);
var mixedArray=[1, 2, 3, "s", "2", 3, 2, "x"];
sumNum(mixedArray);
var givenNum=62;
var constNum=50;
var percent=25;
percentRadius(givenNum, constNum, percent);