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

function nameString(name) {
    result = name + "Edabit"
    return result 
}
// console.log(nameString("Kevin"))
// console.log(nameString("Mubashir"))
// console.log(nameString("Matt"))
// console.log(nameString("javaScript"))

// *********************************************************

function redundant(str) {

    function innRedundant() {
        return str
    }
    return innRedundant 
}
// console.log(redundant())

// *********************************************************

function getFirstValue(arr) {
    return arr[0];
}

// console.log(getFirstValue([1,2,3]))
// console.log(getFirstValue([9,2,3]))
// console.log(getFirstValue([7,2,3]))

// *********************************************************