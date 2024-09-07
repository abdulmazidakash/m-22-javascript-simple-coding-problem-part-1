/**
 * array has some duplicate elements
 * []
 * 
 */

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];

const numbers1 = [23, 42, 3, 54, 4, 654, 64, 3, 23, 43, 54];

function noDuplicate (array)  {
	// console.log(array);
	const unique = [];
	for (const item of array){
		if (unique.includes(item)  === false) {
			unique.push(item)
		}
	}
	return unique
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);
const uniqueNumber = noDuplicate(numbers1);
console.log(uniqueNumber);