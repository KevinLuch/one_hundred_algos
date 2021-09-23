// *********************************************************

// # 1 - Create a function which returns the number of true values there are in an array
function countTrue(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            counter++;
        }
    }
    return counter;
    
}

// console.log(countTrue([false,true,true, true, true]))

// *********************************************************

// # 2 - Concantinate 
function nameString(name) {
    result = name + "Edabit"
    return result 
}
// console.log(nameString("Kevin"))
// console.log(nameString("Mubashir"))
// console.log(nameString("Matt"))
// console.log(nameString("javaScript"))

// *********************************************************

// # 3 - Write a function redundant(str) that takes in a string and returns a function that returns that string 
function redundant(str) {

    function innRedundant() {
        return str
    }
    return innRedundant 
}
// console.log(redundant())

// *********************************************************

// # 4 - Write a function that reutrns the first element 
function getFirstValue(arr) {
    return arr[0];
}

// console.log(getFirstValue([1,2,3]))
// console.log(getFirstValue([9,2,3]))
// console.log(getFirstValue([7,2,3]))

// *********************************************************

// # 5 - While loop with break statement
var num = 1;
while (num < 5) {
    if (num == 3) {
        break;
    }
    // console.log("I'm counting! The number is", num);
    num = num + 1
}

// # 6 - For loop with continue statement 
for (var num = 1; num < 5; num += 1) {
    if (num == 3) {
        continue;
    }
    // console.log("I'm counting! The number is", num);
}

// *********************************************************

// # 7 - Swapping values in an array
x = [1, 5, 9, 78];
// console.log(x);
temp = x[1];
x[1] = x[3];
x[3] = temp;
// console.log(x);

// *********************************************************

// # 8 - Combining Arrays and FOR loops
var nums = [1, 3, 5, 9];
for (idx = 0; idx < nums.length; idx++) {
    // console.log(nums[idx]);
}

// *********************************************************

// # 9 - Array with multiples of 3 up to 1000
var arr = []
for (val = 3; val <= 9999; val = val+3) {
    arr.push(val);
}
// console.log(arr);

// *********************************************************

// # 10 - Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x) = x^b with respect to x evaluated at x = m, where b and m are constants 
function derivative(b,m) {
    return b * Math.pow(m, b - 1)
}

// console.log(derivative(4,2))

// var a = Math.pow(2,2);
// console.log(a)

// *********************************************************

// # 11 - You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twos, threes) {
    var x = twos * 2;
    var y = threes * 3;
    return "The score is", x + y 
}

// console.log(points(1,1));
// console.log(points(2,1));

// *********************************************************

function lessThan100(num1, num2) {
    if (num1 + num2 < 100) {
        return true
    }
    return false
}

console.log(lessThan100(100,1))
console.log(lessThan100(1,1))
console.log(lessThan100(50,49))
console.log(lessThan100(50,50))