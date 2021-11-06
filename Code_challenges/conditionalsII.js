// As a diligent student, I want to reward myself if I finish my homework, and based on the time of day, I want either a latte if it's before 10am, I want a hot chocolate it's between 10 and 4pm, and I want ice cream between 4pm - 10pm. If it's after 10pm, I don't want anything other than sleep!

// Feature 1

// Building off the MVP, if I'm up for ice cream, I want strawberry if it's Wednesday, otherwise I want vanilla.

// Feature 2 (hard) - optional

// Building off Feature 1, I want to adjust the current conditions and add a new option so that if the time is between 3pm - 6pm, I want to have it pick either ice cream or hot chocolate depending on if the time is even or odd. 

// Feature 3 (super hard) - optional

// Building off Feature 2, I want my options for the 3pm - 6pm slot to be a random selection from a group of 4 options: if the time is even, I want my selections to be ice cream, cookies, or candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake. 

// Hints: 

// What data type can hold a group of things? 
// You'll have to self-teach how to pick a random number from that group of things.

/*
PSEUDOCODE:

1. creat function called homeworkReward()
2. reward with latte if its before 10am
3. reward with hot chocolate if its between 10 and 4pm
4. reward with ice cream f its between 4 and 10pm
	a. if its wednesday i want strawberry
	b. otherwise i want vanilla
5. if its after 10pm (no reward) console.log("I don't want anything other than sleep!")
6. if its 3-6pm (1500, 1800) reward with random group of 4 options (*Learn Random*)
7. if the time is even selections = ice cream, cookies, candy
8. if time is odd selections = hot chocolate, tea, cake
*/

function homeworkReward(time, day) {

	var evenRewards = ["Ice Cream!", "Cookies!", "Candy!"];
	var oddRewards = ["Hot Chocolate!", "Tea!", "Cake!"];

	if (time > 6 && time < 10) {
		time = "Latte!";
		day = "Let's get a, " + time;
	}
	else if (time == 10 || time < 16) {
		if (time == 15 && time < 16) {
			if (time % 2 == 0) {
				// console.log(time);
				time = evenRewards[Math.floor(Math.random() * evenRewards.length)];
				day = "Let's get " + time;
			}
			else {
				time = oddRewards[Math.floor(Math.random() * oddRewards.length)];
				day = "Let's get " + time;
			}
		}
		else {
			time = "Hot Chocolate!";
			day = "Let's get a, " + time
		}
	}
	else if (time == 16 || time < 22) {
		if (time == 16 || time <= 18) {
			if (time % 2 == 0) {
				// console.log(time);
				time = evenRewards[Math.floor(Math.random() * evenRewards.length)];
				day = "Let's get " + time;
			}
			else {
				time = oddRewards[Math.floor(Math.random() * oddRewards.length)];
				day = "Let's get " + time;
			}
		}
		else {
			if (day == "Wednesday") {
				time = "Ice Cream!";
				day = "Let's get Strawberry " + time;
				// console.log("Strawberry!");
			}
			else {
				time = "Ice Cream!";
				day = "Let's get Vanilla " + time;
				// console.log("Vanilla!");
			}
		}
	}
	else if (time >= 22) {
		time = "I don't want anything other than sleep!";
		day = time
		// console.log("I don't want anything other than sleep!");
	}

	return (day);
}
console.log(homeworkReward(18, "Wednesday"));