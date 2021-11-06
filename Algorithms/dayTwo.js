//1. create a function that accepts an array
//2. every time that array has three odd values in a row, print "That's odd!"
//3. every time the array has three evens in a row, print "Even more so!"

//psuedo code
//1. create function
//2. cycle through an array with with a for loop starting at index of 0 	 	  incrementing by 1 traveling by .length
//3. use conditionals to check for consecutive odds and evens
//3.a. build  
//4. console.log results

//[3,3,3,3] ---- one set of three odd values


// function checkingValues(arr) {
// 	// var arr = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr.length == 3) {
// 			if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
// 				console.log('Even more so!');
// 			}
// 			if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
// 				console.log("That's odd!");
// 			}
// 		}
// 		else if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0 && arr[i + 3] % 2 != 0) {
// 			console.log('Even more so!');
// 		}
// 		else if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0 && arr[i + 3] % 2 == 0) {
// 			console.log("That's odd!");
// 		}
// 	}
// }
// checkingValues([2, 2, 2, 3, 3, 3, 3, 4]);



function evensAndOdds(arr) {
	var evenTally = 0;
	var oddTally = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			evenTally += 1;
			oddTally = 0;
			if (evenTally == 3) {
				console.log('Even more so!')
				evenTally = 0;
			}
		}
		else {
			oddTally += 1;
			evenTally = 0;
			if (oddTally == 3) {
				console.log("That's odd!")
				oddTally = 0;
			}

		}
	}
}
evensAndOdds([2, 2, 2, 2]);