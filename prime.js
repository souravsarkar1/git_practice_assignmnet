


// prime number checker 
 
function primeChecking(num) {
    
    for(let i = 2;i<=num**(0.5);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
    
}