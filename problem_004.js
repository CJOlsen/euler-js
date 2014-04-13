// Project Euler
// Problem 4
// Author: Christopher Olsen

// A palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.


// The Plan:
// Check every combination (all 899*899 of them), check each for palindrome,
// keep the largest.  (No fancy palindrome properties here...)

function reverse (s) {
    // reverses a string, not guaranteed to work with special characters
    return s.split('').reverse().join('');
}

function problem4 () {
    var largest = 0;
    for (var i = 100; i < 1000; i++) {
	for (var j = 100; j < 1000; j++) {
	    var sum = i*j;
	    if (sum.toString() == reverse(sum.toString())) {
		if (sum > largest) {
		    largest = sum;
		}
	    }
	}
    }
    return largest;
}

var t1 = new Date().getTime();
max_palindrome = problem4();
var t2 = new Date().getTime(); 
var t3 = t2 - t1;

console.log("The solution is: " + max_palindrome + " and it took " + t3 + " milliseconds to find.");

// "The solution is: 906609 and it took 4082 milliseconds to find."
