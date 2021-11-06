/* 1. Print 1-255
	Print1To255()
	Print all the integers from 1 to 255


function get_array() {
	var arr = [];
	for (var i = 1; i <= 255; i++) {
		arr.push(i);
	}

	return arr;
}
console.log(get_array());
*/


/*
2. Print Odds 1-255
	PrintOdds1To255()
	Print all odd integers from 1 to 255.
*/
// function printOdds(sum) {

// 	for (var i = 1; i <= 255; i++) {
// 		if (i % 2 !== 0) {
// 			console.log(i);
// 		}
// 	}

// 	return i;
// }
// printOdds();

/*
3. Print Ints and Sum 0-255
PrintIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far.

*/

// function printIntsAndSum0To255(i) {
// 	var sum = 0;

// 	for (var i = 0; i <= 255; i++) {
// 		console.log(i);
// 		sum += i;
// 		console.log(sum);

// 	}
// }
// printIntsAndSum0To255();

/*
4.Iterate and Print Array
Iterate through a given array, printing each value.
PrintArrayVals(arr)


function printArrayVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
	return arr
}
printArrayVals([1, 2, 3, 4, 5, 6, 7]);
*/

/*
5. Find and Print Max
PrintMaxOfArray(arr)
Given an array, find and print its largest element.
function printMaxOfArray(arr) {
	var max = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
console.log(printMaxOfArray([1, 2, 3, 4, 5, 6, 7, 8]));
*/



/*
6. Get and Print Average
PrintAverageOfArray(arr)
Analyze an array’s values and print the average.

function printAverageOfArray(arr) {
	var avg = 0;
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	avg = sum / arr.length;

	return avg;
}
console.log(printAverageOfArray([1, 2, 3, 4]));
*/



/*
7. Array with Odds
ReturnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).

function returnOddsArray1To255(arr) {
	var array = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0) {
			array.push(arr[i])
		}
	}
	return array;
}
console.log(returnOddsArray1To255([1, 2, 3, 4, 5, 6, 7, 8, 9]));
*/


/*
8. Square the Values
SquareArrayVals(arr)
Square each value in a given array, returning that same array with changed values.

function squareArrayVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * arr[i];
	}
	return arr;
}
console.log(squareArrayVals([1, 2, 3, 4, 5]));
*/



/*
9. Greater than Y
ReturnArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the number of array values greater than Y.

function returnArrayCountGreaterThanY(arr, y) {
	var count = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > y) {
			count++
			// console.log(count);
		}
	}
	return count;
}
console.log(returnArrayCountGreaterThanY([1, 2, 3, 4, 5], 3));
*/


/*
10.  Zero Out Negative Numbers
ZeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative values to zero.

function zeroOutArrayNegativeVals(arr) {

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}
console.log(zeroOutArrayNegativeVals([1, -1, 2, -2, 3, -3]));
*/


/*
11.  Max, Min, Average
PrintMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average values for that array.

function printMaxMinAverageArrayVals(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	var avg = sum / arr.length;
	var newarray = [max, min, avg];
	return newarray;
}

console.log(printMaxMinAverageArrayVals([1, 2, 3, 4, 5]));
*/




// 12. Shift Array Values
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

// Example: shiftArrayValsLeft([1, 2, 3, 4, 5]) --> [2, 3, 4, 5, 0]

// function shiftArrayValsLeft(arr){
// 	for(var i = 0; i < arr.length; i++){
// 		arr[i] = arr[i + 1];
// 	}
// 	arr[arr.length - 1] = 0;
// 	return arr
// }
// console.log(shiftArrayValsLeft([1, 2, 3, 4, 5]))


// 13. Swap String For Array Negative Values
// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.

// Example: swapStringForArrayNegativeVals([-1, 2, 3, -4, 5]) -- ["Dojo", 2, 3, "Dojo", 5]


// function swapStringForArrayNegativeVals(arr) {
// 	for (var i = 0; i < arr.length; i++) {	//1. for loop that loops through the array one iteration at a time
// 		if (arr[i] < 0) {					//2. conditional that checks for negative values
// 			arr[i] = 'Dojo';				//3. replacing negative values with 'Dojo
// 		}
// 	}
// 	return arr;
// }
// console.log(swapStringForArrayNegativeVals([-1, 2, 3, -4, 5]));



//  Extras


// 1. Get even to 1000
// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.

// function sum_even_numbers(){
// 	var sum = 0;

// 	for(var i = 1;i <= 1000; i++){
// 		if(i % 2 === 0){
// 			sum += i;
// 		}
// 	}

// 	return sum;
// }

// sum_even_numbers();



// 1. Sum odd 5000
// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

// function sum_odd_5000() {
// 	var sum = 0;

// 	for (var i = 1; 1 <= 5000; i++) {
// 		if (i % 2 !== 0) {
// 			sum += i;
// 		}
// 	}

// 	return sum;
// }