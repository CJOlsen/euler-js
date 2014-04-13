// Project Euler
// Problem 5
// Author: Christopher Olsen


// 2520 is the smallest number that can be divided by each of the numbers from 
// 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the 
// numbers from 1 to 20?



// note:
// We only have to check the numbers 11-20 because 1-10 will always correspond 
// (i.e. if it's divisible by 16 it will also be divisible by 2,4,8)
// We can also count upwards by 20's which reduces the search space.

function isDivisible(N1,N2) {
    return N1 % N2 == 0;
}

function problem5() {
    var current = 20;
    while (true) {
	function helper(num) {
	    // not sure how else to pass isDivisible in .every() below,
	    // this gets redefined with the new 'current' each loop
	    return isDivisible(current, num);
	}
	if ([19,18,17,16,15,14,13,12,11].every(helper)) {
	    return current;
	} else {
	    current += 20;
	}
    }
}

var t1 = new Date().getTime();
answer = problem5();
var t2 = new Date().getTime(); 
var t3 = t2 - t1;

console.log("The solution is: " + answer + " and it took " + t3 + " milliseconds to find.");


// "The solution is: 232792560 and it took 130416 milliseconds to find."
//
// ! That's a really long time....!


// maybe as a series of nested if's?
function problem5_b() {
    var current = 20;
    while (true) {
	if (current % 19 == 0) {
	    if (current % 18 == 0) {
		if (current % 17 == 0) {
		    if (current % 16 == 0) {
			if (current % 15 == 0) {
			    if (current % 14 == 0) {
				if (current % 13 == 0) {
				    if (current % 12 == 0) {
					if (current % 11 == 0) {
					    return current;
					}
				    }
				}
			    }
			}
		    }
		}
	    }
	} 
	current += 20;
    } // end while
}

var t1_b = new Date().getTime();
answer_b = problem5_b();
var t2_b = new Date().getTime(); 
var t3_b = t2_b - t1_b;

console.log("The solution is: " + answer_b + " and it took " + t3_b + " milliseconds to find.");

// "The solution is: 232792560 and it took 2038 milliseconds to find."
//
// much better speed, looks better, too
