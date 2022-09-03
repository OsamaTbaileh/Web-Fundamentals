//Alaways Hungry 
function alwaysHungry(arr) {
    var counter=0;
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i]=="food"){
            console.log("yummy");
            counter++;
        }
    }       
    if(counter==0){
        console.log("Im hungry");
    }
} 
var food = [3.14, "food", "pie", true, "food"];
alwaysHungry(food);


//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
        for(var i=0 ; i<arr.length ;i++){
            if(arr[i]>cutoff){
                filteredArr.push(arr[i]);
            }
        }
    return filteredArr;
}
var x=[6, 8, 3, 10, -2, 5, 9]
var y=5 
var result = highPass(x,y);
console.log(result);


//Better than average
function betterThanAverage(arr) {
    var sum = 0;
    counter=0
        for(var i=0 ; i<arr.length ; i++){
            sum+=arr[i];
            }
            var average= sum/arr.length;

            for(var i=0 ; i<arr.length ; i++){
                if(arr[i]>average){
                    counter++;
                }
            }
    return counter;
}
var x=[6, 8, 3, 10, -2, 5, 9];
var result = betterThanAverage(x);
console.log(result); 


//Array Reverse
function reverse(arr) {
    var newarray =[];
    for(var i=arr.length-1 ; i>=0 ; i--){
        newarray.push(arr[i]);
    }
    return newarray;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 


//Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2 ; i<n ; i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    return fibArr;
}
var x = 10;
var result = fibonacciArray(x);
console.log(result);