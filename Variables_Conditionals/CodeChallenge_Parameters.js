/*
1. Create a function that will say good day to that person by name.
2. Inlcude the time of day
3. If function is called with "Count Dooku", say: "I'm coming for you, Dooku!"
*/


function greetings(tod, person) {

	if (person == "Count Dooku") {
		console.log("I'm coming for you, Dooku!");
	} else {
		console.log('Good ' + tod + ', ' + person + '!');
	}
}
greetings('Afternoon', 'Nolan Rangel');

