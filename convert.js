//12 inch = 1 feet

function inchToFeet (inch) {
	const feet = inch / 12;
	return feet;
}

const akash = inchToFeet(75);
console.log(akash);

function inchToFeet2 (inch)  {
	const feetFraction = inch / 12;
	const feetNumber = parseInt (feetFraction);
	const inchRemaining = inch % 12;
	const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
	return result;
}

const akashHeight = inchToFeet2(75);
console.log(akashHeight);


//mile to kilometer convert 
function mileToKilometer (mile) {
	const kilo = mile * 1.60934;
	return kilo;
}

const kilometer = mileToKilometer(75);
console.log(kilometer);

//kilometer to mile 
function kilometerToMile (kilo) {
	const mile = kilo * 0.621371;
	return mile;
}

const mile = kilometerToMile(75);
console.log(mile);