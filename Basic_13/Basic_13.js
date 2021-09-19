// 1. Print 1-255 : Print all the integers from 1-255
function print1to255(){
    for(var x=1; x<=255; x++)
    {
        console.log(x);
    }
}
// 2. Print Sum 0-255 : Print integers from 0 to 255, and with each integer print the sum so far.
function printSum1to255(){
    var sum = 0;
    for(var x=0; x<=255; x++)
    {
        console.log(x);
        sum += x;
        console.log(sum)
    }
}
// 3. Find and Print Max : Print the largest element in a given array
function printArrayMax(arr){
    var max = arr[0];
    for(var x = 0; x < arr.length; x++){
        if (arr[x] > max){
            max = arr[x];
        }
    }
    console.log(max)
}
// 4. Array with Odds 1-255
function printOdds(){
    var arr = []
    for(var x = 1; x<=255; x++){
        if(x%2==1){
            arr.push(x)
        }
    }
    console.log(arr)
}

// 5. Greater than Y
function greaterY(arr, y){
    var sum = 0
    for(var x = 0; x < arr.length; x++){
        if(arr[x] > y){
            sum++
            console.log(arr[x])
        }
    }
    console.log("The total number of values greater than " + y + " is " + sum)
}
// greaterY([10,20,30,15,5,9,18],17)

// 6. Max, Min, Average
function maxMinAverage(arr){
    var max = arr[0]
    var min = arr[0]
    var ave = 0
    for(var x = 0; x < arr.length; x++){
        ave = ave+arr[x]
        if(arr[x] > max){
            max = arr[x]
        } else if(arr[x] < min){
            min = arr[x]
        }
    }
    console.log(max)
    console.log(min)
    console.log(ave/arr.length)
}
// maxMinAverage([10,7,52,16,6])

