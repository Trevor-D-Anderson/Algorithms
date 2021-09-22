// 1. Always Hungry
function alwaysHungry(arr) {
    var sum = 0
    for(var x = 0; x<arr.length; x++){
        if(arr[x] == "food"){
            console.log("yummy")
        }else{
            sum = sum+1
            if(sum == arr.length){
                console.log("I'm Hungry")
            }
        }
    }
}

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(x=0; x<arr.length; x++){
        if(arr[x] > cutoff){
            filteredArr.push(arr[x])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greater than the average
    for(var x = 0; x < arr.length; x++){
        sum = sum + arr[x]
    }
    sum = sum/arr.length
    for(var x = 0; x < arr.length; x++){
        if(arr[x]>sum){
            count+=1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// 4. Array Reverse
function reverse(arr) {
    arr.reverse()
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var x = 1; x<n-1; x++){
        fibArr.push(fibArr[x]+fibArr[x-1])
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
