// Print odds 1-20
function printodds(){
    for (var i=1 ; i<20 ; i++) {
        if(i%2==1){
            console.log(i);
        }
    }
}
printodds()





// Decreasing Multiples of 3
function decreasingmultiples(){
    for(var j=100 ; j>=0 ; j--){
        if(j%3==0){
            console.log(j);
        }
    }
}
decreasingmultiples()





// Print the sequence
function printthesequence(){
    for(z=4 ; z>-4 ; z-=1.5){
        console.log(z);
    }
}
printthesequence()





// Sigma 
function sigma(){
    var sum=0;
    for(var x=1 ; x<=100 ; x++){
        sum=sum+x;
    }
    console.log(sum);
}
sigma()





// Factorial
function factorial(){
    var product=1;
    for(var y=1 ; y<=12 ; y++){
        product*=y;
    }
    console.log(product);
}
factorial()
