var ridersHeigth = 62;  //input variable for riders heigth in inches
var ridersAge = 11;  //input variable for rider age in years

var requiredHeigth = 52; //Var requiredHeigth will be used within a boolean to check if child is tall enough
var requiredAge = 10; // Var requiredAge will be used within a boolean to check if child is old enough

// Both heigth AND age are required
if (ridersHeigth > requiredHeigth && ridersAge > requiredAge) {
	console.log("Get on that ride, kiddo!");
} else {
	console.log("Sorry kiddo. Maybe next year.");
}

// Either heigth OR age are required
var ridersHeigth = 62;
var ridersAge = 11;

var requiredHeigth = 52;
var requiredAge = 10;

if (ridersHeigth > requiredHeigth || ridersAge > requiredAge) {
	console.log("Get on that ride, kiddo!");
} else {
	console.log("Sorry kiddo. Maybe next year.");
}

