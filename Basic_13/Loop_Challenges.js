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
// printSequence()

// 4. Sigma
function sigma(){
    var sum = 0
    for(var x = 0; x <=100; x++){
        sum = sum + x
    }
    console.log(sum)
}
// sigma()

// 5. Factorial
function factorial(){
    var num = 1
    for(var x = 1; x <=12; x++){
        num = num*x
    }
    console.log(num)
}
// factorial()