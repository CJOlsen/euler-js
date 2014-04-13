// Project Euler
// Problem 6
// Author: Christopher Olsen

// The sum of the squares of the first ten natural numbers is,
// 1**2 + 2**2 + ... + 10**2 = 385
//
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10**)2 = 55**2 = 3025
//
// Hence the difference between the sum of the squares of the first ten natural 
// numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred 
// natural numbers and the square of the sum.


function problem6() {
    var sumOfSquares = 0;
    var theSum = 0; // is sum a reserved word?
    for (var i = 1; i < 101; i++) {
	sumOfSquares = sumOfSquares + (i*i);
	theSum = theSum + i;
    }
    var squareOfSum = theSum*theSum;
    return squareOfSum - sumOfSquares;
}


var t1 = new Date().getTime();
answer = problem6();
var t2 = new Date().getTime(); 
var t3 = t2 - t1;

console.log("The solution is: " + answer + " and it took " + t3 + " milliseconds to find.");

// "The solution is: 25164150 and it took 0 milliseconds to find."
