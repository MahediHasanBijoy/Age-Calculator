function calculate(){
	let ageAtDate = document.getElementById('age_at_date').value;
	let arr = ageAtDate.split('-');


	let dob = document.getElementById('dob').value;
	let arr2 = dob.split('-');

	if(ageAtDate == '' || dob == ''){
		alert('You must select both dates');
		return 0;
	}

	var ageAtYear = parseInt(arr[0]);
	var ageAtMonth = parseInt(arr[1]);
	var ageAtDay = parseInt(arr[2]);

	var birthYear = parseInt(arr2[0]);
	var birthMonth = parseInt(arr2[1]);
	var birthDay = parseInt(arr2[2]);

	if(ageAtYear < birthYear){
		alert('Your birth year cannot be greater than age at year');
		return 0;
	}

	// Days of Month calculation
	var dom = 0;
	if(ageAtMonth == 1 || ageAtMonth == 3 || ageAtMonth == 5 || ageAtMonth == 7 || ageAtMonth == 8 || ageAtMonth == 10 || ageAtMonth == 12){
		dom = 31;
	}else if(ageAtMonth == 2){
		console.log('ok');
		if(ageAtYear % 4 == 0 && ageAtYear % 100 != 0){
			dom = 29;
		}else if(ageAtYear% 400 == 0){
			dom = 29;
		}else{
			dom = 28;
		}
	}else{
		dom = 30;
	}

	var days;
	var months;
	var years;
	// Age calculation
	if(ageAtDay < birthDay){
		ageAtDay += dom;
		days = ageAtDay - birthDay;

		ageAtMonth -= 1;

		if(ageAtMonth < birthMonth){
			ageAtMonth += 12;
			months = ageAtMonth - birthMonth;

			ageAtYear -= 1;
			years = ageAtYear - birthYear;
		}else if(ageAtMonth >= birthMonth){
			months = ageAtMonth - birthMonth;
			years = ageAtYear - birthYear;
		}
	}else if(ageAtDay >= birthDay){
		days = ageAtDay - birthDay;

		if(ageAtMonth < birthMonth){
			ageAtMonth += 12;
			months = ageAtMonth - birthMonth;

			ageAtYear -= 1;
			years = ageAtYear - birthYear;
		}else if(ageAtMonth >= birthMonth){
			months = ageAtMonth - birthMonth;
			years = ageAtYear - birthYear;
		}
	}

	document.getElementById('result').innerHTML = years + " Years  " + months + " Months  " + days + " Days";


}