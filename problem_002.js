// Project Euler
// Problem 2
// Author: Christopher Olsen


// Each new term in the Fibonacci sequence is generated by adding the previous 
// two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed 
// four million, find the sum of the even-valued terms.


var total = 0;
var smaller = 1;
var larger = 2;

function problem2 () {
    while (larger < 4000000) {
	if (larger % 2 == 0) {
	    total += larger
	}
	var temp = smaller;
	smaller = larger;
	larger = smaller + temp;
    }
}

var t1 = new Date().getTime();
problem2();
var t2 = new Date().getTime();
var t_total = t2 - t1;

console.log("The solution is: " + total + " and it took " + t_total + " milliseconds to find.")

// "The solution is: 4613732 and it took 0 milliseconds to find."
//
// zero milliseconds?...
