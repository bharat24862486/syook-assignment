// Question :

// How many trails to 1?

// Take a positive integer x. If x is even, divide x by 2 to get x / 2. If x is odd, multiply x by 3 and add 1 to get 3x + 1. Repeat the process indefinitely. No matter which number you start with, you will always reach 1 eventually during the process.
// Given a number x, return the number of steps required to reach 1.
// Examples

// Starting with x = 12, the steps would be as follows:

// 12 - even (divide by 2)
// 6 - even (divide by 2)
// 3 - odd (3(3) + 1)
// 10 - even (divide by 2)
// 5 - odd (3(5) + 1)
// 16 - even (divide by 2)
// 8 - even (divide by 2)
// 4 - even (divide by 2)
// 2 - even (divide by 2)
// 1 - stop

// We got to 1 in 9 steps. So for input x = 12, the return value would be 9.



// Solution:

function getOne(n) {

    let n = 17
    let count = 0
    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2
        } else {
            n = (3 * n + 1)
        }
        count++
    }

    return(count)

}