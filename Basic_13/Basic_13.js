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
// 4. Print Odds 1-255