// 1. Print odds 1-20
function printOdds1to20(){
    for(var x = 0; x <=20; x++){
        if(x%2==1){
            console.log(x)
        }
    }
}
// printOdds1to20()

// 2. Decreasing Multiples of 3
function decreasingMultiples(){
    for(var x = 100; x>0; x--){
        if(x%3==0){
            console.log(x)
        }
    }
}
// decreasingMultiples()

// 3. Print the sequence
function printSequence(){
    var arr = [4,2.5,1,-0.5,-2,-3.5]
    for(var x = 0; x < arr.length; x++){
        console.log(arr[x])
    }
}
printSequence()