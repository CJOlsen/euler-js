// Project Euler
// Problem 3
// Author: Christopher Olsen

// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?


// Note:
// We can check 2 and go up finding all prime factors fairly quickly if every
// time we find a factor we divide the upper limit by that factor.  So we'll
// find *all* the prime factors of the number and then find the largest among
// them.


function problem3 () {
    
    var lower = 2;
    var upper = 600851475143;
    var factors = [];
    
    while (upper != 1) {
	// is the upper number evenly divisible by the lower?
	if (upper % lower == 0) {
	    // if so, add lower to the factors and divide upper by lower
	    factors.push(lower)
	    upper /= lower
	} else {
	    // if lower is not a factor of upper, 
	    // increment lower and check again
	    lower++
	}
    }

    // factors now has all the factors in order, so the last is the greatest
    return factors[factors.length-1];
}

var t1 = new Date().getTime();
max_factor = problem3();
var t2 = new Date().getTime(); 
var t3 = t2 - t1;

console.log("The solution is: " + max_factor + " and it took " + t3 + " milliseconds to find.");

// function problem3 () {
    
    var lower = 2;
    var upper = 600851475143;
    var factors = [];
    
    while (upper != 1) {
	// is the upper number evenly divisible by the lower?
	if (upper % lower == 0) {
	    // if so, add lower to the factors and divide upper by lower
	    factors.push(lower)
	    upper /= lower
	} else {
	    // if lower is not a factor of upper, 
	    // increment lower and check again
	    lower++
	}
    }

    // factors now has all the factors in order, so the last is the greatest
    return factors[factors.length-1];
}

var t1 = new Date().getTime();
max_factor = problem3();
var t2 = new Date().getTime(); 
var t3 = t2 - t1;

console.log("The solution is: " + max_factor + " and it took " + t3 + " milliseconds to find.");

// "The solution is: 6857 and it took 1 milliseconds to find."
