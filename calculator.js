var buttonValue = [];
var operator = "";
var inputString1 = "";
var inputNum1 = 0;
var inputNum2 = 0;
var result =0;
var operatorFlag = false;  //flag to input the 2nd number display in result
var equalFlag = false; //flag for equal operator, clear all values

var add = function(num1, num2){
	return num1+num2;
}

var multiply = function(num1,num2){
	return num1*num2;
}

var divide = function(num1,num2) {
	var resultNum = num1.toFixed(6)/num2.toFixed(6);
	var resultString = resultNum.toString();
	
	var n = resultString.indexOf(".");

	if(n > -1 && resultString.substr(n+1).length>6) {
			return resultNum.toFixed(6);
	} else {
		return resultNum; // integer or decimal less than 6 digits
	}
	
}

function subtract(num1,num2) {
	return num1-num2;
}

$(".number").on("click",function(){
 	
	if(equalFlag) {
		buttonValue = [];
		operator = "";
		inputString1 = "";
		inputNum1 = 0;
		inputNum2 = 0;
		result =0;
		equalFlag=false;	
	}

	var num = $(this).html();
	buttonValue.push(num);

	if(!operatorFlag) {
		if(result ===0) {
			if(num === "."){
				result +=num;
			} else {
				result = num;
			}
		} else {
				result += num;
		}
	} else {
		//after operator clicked, clear result
		result=num;
		operatorFlag=false;
	}

	$(".result").html(result);
});

$(".math").on("click", function(){

	operatorFlag=true;
	equalFlag=false;
	operator = $(this).html();
	console.log($(this).html());

	if(!inputString1) { 
		inputString1 = buttonValue.join("");			
	} // input string is empty

	inputNum1 = Number(inputString1);
	buttonValue = [];
	
});

$(".equal").on("click", function(){

	equalFlag = true;
	var inputString2 = buttonValue.join("");

	inputNum2 = Number(inputString2); 
	buttonValue = [];

	switch(operator) {
		case "+":
			result = add(inputNum1,inputNum2);
			break;
		case "-":
			result = subtract(inputNum1,inputNum2);
			break;
		case "X":
			result = multiply(inputNum1,inputNum2);
			break;
		case "/":
			if (inputNum2 !==0) {
				result = divide(inputNum1,inputNum2);
			} else {
				result = "error";
			}
			break;
		default:
			result = "error";		
	};  
	console.log("result = " + result);
	$(".result").html(result);  //display result in result div

//Inital the value and operator
	buttonValue = [];
	operator = "";
	inputString1 = result;
	inputNum2 = 0; 
	operatorFlag=false;


});  

$(".clear").on("click", function(){

	buttonValue = [];
	operator = "";
	inputString1 = "";
	inputNum1 = 0;
	inputNum2 = 0;
	result =0;
	equalFlag=false;
	operatorFlag=false;
	$(".result").html(result);

});













