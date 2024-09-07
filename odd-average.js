/**
 * function takes an array as parameter
 * give me the average of the odd number in the array
 * 
 */

/**
 * 1. put odd numbers in an array
 */


function oddAverage (numbers)  {
// console.log(numbers);
const odds = [];
for (const number of numbers){
	// console.log(number);
	if (number  % 2  === 1){
		// console.log(number);
		 odds.push(number)
	}
}
//odds is the array that contains only the odd numbers

// console.log(odds);
let sum = 0;
	for (const number of odds){
		sum = sum + number;
		// console.log(sum);
	}
	const count = odds.length;
	console.log(sum, count);
	const avg = sum / count;
	return  avg;
}

const numbers = [23, 28, 43, 53, 34, 22, 42];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);