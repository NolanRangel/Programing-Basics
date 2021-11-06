// //1.
// for (var x = 3; x < 7; x += 3) {
// 	console.log(x);
// }

//2.
// var msg = 'codingdojo';
// for (var x = 11; x < msg.length + 2; x += 2) {
// 	console.log(x);
// }

//3.
// var x = 10;
// if (x == 10) {
// 	console.log(x);
// }
// else {
// 	console.log('hello');
// }

//4.
// var msg = 'dojo';
// if (msg == 'dojo') {
// 	console.log('coding' + msg);
// }
// else {
// 	console.log('ninja' + msg);
// }

//5.
// for (var x = 7; x > 1; x -= 2) {
// 	console.log(x);
// 	break;
// }

//6.
// var msg = 'hello!';
// for (var x = 19; x > msg.length + 8; x -= 2) {
// 	console.log(x);
// }

//7.
// var msg = 'codingdojo';
// for (var x = 3; x < msg.length - 4; x += 1) {
// 	if (msg.length == 1) {
// 		for (var i = 1; i < 5; i++) {
// 			console.log(i);
// 		}
// 	}
// 	else {
// 		for (var i = msg.length; i > (msg.length - 3); i -= 1) {
// 			console.log(i);
// 		}
// 	}
// }

// .8
// function sum_odd() {
// 	var sum = 0;
// 	//your code here
// 	for (var i = 10; i <= 81; i++) {
// 		if (i % 2 !== 0) {
// 			sum++;
// 		}
// 	}
// 	return sum;
// }
// console.log(sum_odd())

//9. - creat a function that will return the difference between the largest and smallest values present in the array
// // function rangeOfAnArray() {
// // 	var array = [13, 15, -18, 29, 3, -4, -9, -10, 3, -7];
// // 	var smallest = array[0];
// // 	var largest = array[0];
// // 	//your code here
// // 	for (var i = 0; i < array.length; i++) {
// // 		if (array[i] > largest) {
// // 			largest = array[i];
// // 		}
// // 		if (array[i] < smallest) {
// // 			smallest = array[i];
// // 		}
// // 	}


// // 	return largest - smallest;
// // }
// console.log(rangeOfAnArray());

//10. - create a function that will return a count of how many positive values are present
// function countPositives() {
// 	var array = [4, 9, -23, 14, -6, 20, 33, -8, 1, -52];
// 	var count = 0;
// 	//your code here
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i] > 0) {
// 			count++;
// 		}
// 	}

// 	return count;
// }
// console.log(countPositives());