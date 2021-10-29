/*
1. we need a loop to check the conditional statement, 'if true, dispense candy'
2. starting point at 1 mile 
3. loop stops at 6 miles
4. loop will know to stop at 6 miles because we will create a condition that updates and checks
5. variables needed include, var i = 1; and userSpeed for stretch feature (to start our count at 1 miles because i will use the modulus operator to check for even numbers to dispense candy 2,4,6)
*/

//Start at 1 in order to not dispense candy at 0 miles
for (var i = 1; i <= 10; i++) {
	if (i % 2 === 0 && i <= 6) {
		console.log(i, 'Dispense candy!');
	}
}

// stretch feature 1
// Need additional variable to check user speed. 
var userSpeed = 5.6;

for (var i = 1; i <= 10; i++) {
	if (i % 2 === 0 && userSpeed > 5.5) {
		console.log(i, 'Dispense candy!');
	}
}

