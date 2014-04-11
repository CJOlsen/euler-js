
// Project Euler
// Problem 1
// Author: Christopher Olsen

// Problem Statement:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.



function problem1 () {
    var total = 0;
    // count by 3's
    var i = 3;
    while (i < 1000) {
	total += i;
	i += 3;
    }
    // count by 5's and ignore anything divisible by 3
    var j = 5;
    while (j < 1000) {
	if (j%3 != 0) {
	    total += j;
	}
	j += 5;
    }
}

var T1 = new Date().getTime();
problem1();
var T2 = new Date().getTime();
var T_total = T2 - T1;

console.log("Solution: " + total + " found in time: " + T_total);

// "Solution: 233168 found in time: 0"
// 
// 0 milliseconds?....
