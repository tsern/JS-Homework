//Task 1
function Task1(){
	var name,
		time;
	var isValid = true;
	
	// input name
	do {
		if ( !isValid )
			alert("Incorect name!");
		
		name = prompt("Please enter your name");
		
		isValid = validateName(name);
	} while ( !isValid );
		
	// input time
	do {
		if ( !isValid )
			alert("Incorect time!");
		
		time = prompt("Please enter time in format HH:MM");
		
		isValid = validateTime(time);
	} while ( !isValid );
	
	
	var	place = "Lviv",
		event = "lecture";


	var result = name + " has a " + event + " today at " + time + " somewhere in " + place + ".";

	//console.log("result = ", result);

	document.getElementById('task1Result').innerText = result;


	function validateName(str) {
		var result = /^[a-zA-Z]+$/.test(str);
		return result;
	}
	
	function validateTime(str) {
		var result = /^\d\d:\d\d$/.test(str);
		return result;
	}
}

//Task 2
function Task2(){
	var EUR = inputMoney("Enter ammount of euro");   
		
	var	USD = inputMoney("Enter ammount of dollar");

	var UAH_to_EUR = 31.97,
		UAH_to_USD = 27.17,
		EUR_to_USD = (UAH_to_EUR / UAH_to_USD).toFixed(2),
		EUR_AMOUNT = (EUR * UAH_to_EUR).toFixed(2),
		USD_AMOUNT = (USD * UAH_to_USD).toFixed(2);
	 var result = (EUR + " euros are equal " + EUR_AMOUNT + " grns, " + USD + " dollars are equal " + USD_AMOUNT + " grns , one euro is equal " + EUR_to_USD + " dollars.");

	console.log ("result = ", result);

	document.getElementById('task2Result').innerText = result;
	document.getElementById('task2img').style.display = 'inline';
	

	function validateNumbersOnly(str){
		var result = /^\d+$/.test(str);
		return result;
	}
	
	function inputMoney(msg){
		var amountMoney;
		var isValid = true;
	
		do {
			if ( !isValid )
				alert("Incorect input!");

			amountMoney = prompt(msg);

			isValid = validateNumbersOnly(amountMoney);
		} while ( !isValid );
		
		return amountMoney;
	}
}