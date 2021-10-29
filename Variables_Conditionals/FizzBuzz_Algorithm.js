/*
1. Print the integers from 1 to 100.
2. If the number is a multiple of 3, print the word "Fizz" instead of the number.
3. If he number is a multiple of 5, print the word "Buzz" instead of the number.
4. if the number is a multiple of 3 and 5, print the word "FizzBuzz" instead of the number.
*/
//for loop

for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("Fizz Buzz");
	}
	else if (i % 3 == 0) {
		console.log("Fizz");
	}
	else if (i % 5 == 0) {
		console.log("Buzz");
	}
	else {
		console.log(i)
	}

}

//while loop

var i = 1;

while (i <= 100) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("Fizz Buzz");
	}
	else if (i % 3 == 0) {
		console.log("Fizz");
	}
	else if (i % 5 == 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
	i++
}
